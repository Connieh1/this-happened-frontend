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
      <p>${this.subject.name}</p>
      <h3>${this.title}</h3>
      <p>${this.description}</p>
      <button data-id=${this.id}>edit</button>
    </div>
    <br>`;
  }

  static findById(id) {
      return this.all.find(post => post.id == id);
    }

    renderUpdateForm() {
    return `
    <form data-id=${this.id} >
      <h3>Edit a Post!</h3>

      <label>Subject</label>
      <select id="subject" name="subject" value="${this.subject.name}">
      </select>
      <br><br>

      <label>Title</label>
      <input id='input-title' type="text" name="title" value="${this.title}" class="input-text">
      <br><br>

      <label>Description</label>
      <textarea id='input-description' name="description" rows="8" cols="80" value="">${this.description}</textarea>
      <br><br>

      <input id='edit-button' data-id=${this.id} data-title=${this.title} type="submit" name="submit" value="Edit Post" class="submit">
    </form>
  `;
  }

}

Post.all = [];
