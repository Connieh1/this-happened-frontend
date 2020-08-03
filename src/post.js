class Post{

  constructor(post, postAttributes){
    console.log(postAttributes);
    this.id = post.id;
    this.title = postAttributes.title;
    this.description = postAttributes.description;
    this.subject = postAttributes.subject;
    this.time = postAttributes.subject.created_at;
    Post.all.push(this);
  }


  renderPostCard(){
    return `
    <div class="col-md-6">
      <div class="row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
        <small class="d-inline-block mb-2">${(this.time)}</small>
          <strong class="d-inline-block mb-2 text-primary">${this.subject.name}</strong>
          <h3 class="mb-0">${this.title}</h3>
          <p class="card-text mb-auto">${this.description}</p>
        </div>
        <div class="col-auto d-none d-lg-block">
          <svg class="bd-placeholder-img" width="200" height="250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img" aria-label="Placeholder: Thumbnail"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c"/><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg>
        </div>
      </div>`

      return `

      <div class="post-post" >
        <h2 class="post-post-title">${this.title}</h2>
        <p class="post-post-meta">December 23, 2013 by <a href="#">Jacob</a></p>
        <p>${this.subject}</p>
        <blockquote>
          <p>${this.description}</p>
        </blockquote>
      </div><!-- /.post-post -->
      `
  }

}

Post.all = [];
