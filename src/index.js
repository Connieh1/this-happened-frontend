
const endPoint = "http://localhost:3000/api/v1/posts"
//put in .env

document.addEventListener('DOMContentLoaded', () =>{
  console.log('loaded')
  getPosts()

  const createPostForm = document.querySelector("#create-post-form")
    populateSelection()

  createPostForm.addEventListener("submit", (e) => createFormHandler(e));
  });

function getPosts(){
  fetch(endPoint)
  .then(response => response.json())
  .then(posts => {
    posts.data.sort(function(a,b) {
    let x = a.attributes.title.toLowerCase();
    let y = b.attributes.title.toLowerCase();
    return x < y ? -1 : x > y ? 1 : 0;
    }).
    forEach(post =>{
      let newPost = new Post(post, post.attributes)
    document.querySelector('#post-container').innerHTML += newPost.renderPostCard();
    })
  })
}

// -----Subject Select Box----- //

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

function postFetch(title, description, subjectId){
  fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify({
      title: title,
      description: description,
      subject_id: subjectId
    })
  })
  .then(response => {
    if (!response.ok){
      throw new Error(response)
    }
    return response.json()
  })
  .then(post => {
    const postData = post.data
    let newPost = new Post(postData, postData.attributes)

    document.querySelector('#post-container').innerHTML += newPost.renderPostCard();
  }).catch(err => alert("message"));
}
