class Post{
  constructor(post, postAttributes){
    this.id = post.id;
    this.title = postAttributes.title;
    this.description = postAttributes.description;
    this.subject = postAttributes.subject;
    Post.all.push(this);
  }


  renderPostCard(){
    return `
    <div data-id=${this.id}>
      <h3>${this.title}</h3>
      <p>${this.subject.name}</p>
      <button data-id=${this.id}>edit</button>
    </div>
    <br>`;
  }
}

Post.all = [];
