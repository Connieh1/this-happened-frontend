const endPoint = "http://localhost:3000/api/v1/posts"
const url = 'http://localhost:3000/api/v1/subjects'



document.addEventListener('DOMContentLoaded', () =>{
  getPosts()
})

document.addEventListener('DOMContentLoaded', () =>{
  populateSelection()
})
// document.addEventListener('DOMContentLoaded', () =>{
//   getSubjects()
// })


function getPosts(){
  fetch(endPoint)
  .then(response => response.json())
  .then(posts => {
    posts.data.forEach(post =>{
      const postMarkup = `
          <div data-id=${post.id}>
            <h3>${post.attributes.title}</h3>
            <p>${post.attributes.subject.name}</p>
            <button data-id=${post.id}>edit</button>
          </div>
          <br>`;

          document.querySelector('#post-container').innerHTML += postMarkup
        })

      })
}


// -----

function populateSelection(){
  fetch(url).then(resp => resp.json())
  .then(data =>{
    let subjectSelection = document.getElementById('subjects');
    data.data.forEach(subject => {
      console.log(subject);
      let option = document.createElement("option");
      option.setAttribute("text", subject.attributes.name)
      option.setAttribute("value", subject.id);
      option.innerHTML = subject.attributes.name;
      subjectSelection.appendChild(option)
    });
  });
}
