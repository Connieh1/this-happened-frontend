console.log("in index.js")

const endPoint = "http://localhost:3000/api/v1/posts"

document.addEventListener('DOMContentLoaded', () =>{
  getPosts()
})

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
          <br><br>`;

          document.querySelector('#post-container').innerHTML += postMarkup
        })

      })
}
