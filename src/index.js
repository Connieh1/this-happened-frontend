
const endPoint = "http://localhost:3000/api/v1/posts"

document.addEventListener('DOMContentLoaded', () =>{
  getPosts()

  const createSyllabusForm = document.querySelector("#create-post-form");

  createSyllabusForm.addEventListener("submit", (e) => createFormHandler(e))

})

document.addEventListener('DOMContentLoaded', () =>{
  populateSelection()
})

function getPosts(){
  fetch(endPoint)
  .then(response => response.json())
  .then(posts => {
    posts.data.forEach(post =>{
      let newPost = new Post(post, post.attributes)

      document.querySelector('#post-container').innerHTML += newPost.renderPostCard();
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
    const postData = post.data
    let newPost = new Post(postData, postData.attributes)

    document.querySelector('#post-container').innerHTML += newPost.renderPostCard();
  })
}