class Post{

  constructor(post, postAttributes){
    this.id = post.id;
    this.title = postAttributes.title;
    this.description = postAttributes.description;
    this.subject = postAttributes.subject;
    this.created_at = postAttributes.created_at;
    Post.all.push(this);
  }


  renderPostCard(){
    return `
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <strong class="d-inline-block mb-2 text-primary">${this.subject.name}</strong>
          <h3 class="mb-0">${this.title}</h3>
          <p class="card-text mb-auto">${this.description}</p>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>`


    // return `
    // <div data-id=${this.id}>
    //   <p>${this.subject.name}</p>
    //   <h3>${this.title}</h3>
    //   <p>${this.description}</p>
    // </div>
    // <br>`;
  }

}

Post.all = [];
