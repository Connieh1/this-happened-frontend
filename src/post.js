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


renderUpdateForm() {
    return `
    <form data-id=${this.id} >
      <h3>Edit a Post!</h3>

      <p>Select A Subject</p>
      <select id='updateSubjects' name="updateSubjects"></select>
      <br><br>

      <label>Title</label>
      <input id='input-title' type="text" name="title" value="${this.title}" class="input-text">
      <br><br>

      <label>Description</label>
      <textarea id='input-description' name="description" rows="8" cols="80" value="">${this.description}</textarea>
      <br><br>


      <input id='edit-button' type="submit" name="submit" value="Edit Post" class="submit">
    </form>
  `;
  }

  static findById(id) {
    return this.all.find(post => post.id === id);
  }

}

Post.all = [];
