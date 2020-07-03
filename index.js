const endPoint = "http://localhost:3000/api/v1/posts"

document.addEventListener('DOMContentLoaded', () =>{
  getPosts()

  const createPostForm = document.querySelector("#create-post-form");

  createPostForm.addEventListener("submit", (e) => createFormHandler(e))
})

document.addEventListener('DOMContentLoaded', () =>{
  populateSelection()
})

function getPosts(){
  fetch(endPoint)
  .then(response => response.json())
  .then(posts => {
    posts.data.forEach(post =>{
      const postMarkup = `
          <div data-id=${post.id}>
          <p>${post.attributes.subject.name}</p>
            <h3>${post.attributes.title}</h3>
            <p>${post.attributes.description}</p>
            <button data-id=${post.id}>edit</button>
          </div>
          <br>`;

          document.querySelector('#post-container').innerHTML += postMarkup
        })

      })
}


// -----

function populateSelection(){
  const url = 'http://localhost:3000/api/v1/subjects'

  fetch(url).then(resp => resp.json())
  .then(data =>{
    let subjectSelection = document.getElementById('subjects');
    data.data.forEach(subject => {
      let option = document.createElement("option");
      option.setAttribute("text", subject.attributes.name)
      option.setAttribute("value", subject.id);
      option.innerHTML = subject.attributes.name;
      subjectSelection.appendChild(option)
    });
  });
}

function createFormHandler(e){
  e.preventDefault()
  const titleInput = document.querySelector('#input-title').value;
  const descriptionInput = document.querySelector('#input-description').value;
  const subjectId= parseInt(document.querySelector('#subjects').value);
  postFetch(titleInput, descriptionInput, subjectId)
}

function postFetch(title, description, subject_id){
  fetch(endPoint, {
    //Post request
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      title: title,
      description: description,
      subject_id: subject_id
    })
  })
  .then(response => response.json())
  .then(post => {
    const postData = post.data.attributes
    const postMarkup =`
    <div data-id=${post.id}>
    <h3>${postData.title}</h3>
    <p>${postData.subject.name}</p>
    <button data-id=${postData.id}>edit</button>
    </div>
    <br>`;

    document.querySelector('#post-container').innerHTML += postMarkup;
  })
}
