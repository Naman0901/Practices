<template>
  <div id="add-blog" >
    <h2>Add a New Blog Post</h2>
    <form v-if="!submitted">
      <label>Blog Title</label>
      <input type="text" v-model.lazy="blog.title" required />
      <label>Blog Content</label>
      <textarea v-model.lazy="blog.content"></textarea>
      <div id="checkboxes">
          <label >Travel</label>
          <input type="checkbox" value="Travel" v-model="blog.categories" />
          <label >Sport</label>
          <input type="checkbox" value="Sport" v-model="blog.categories" />
          <label >Cooking</label>
          <input type="checkbox" value="Cooking" v-model="blog.categories" />
          <label >NEWS</label>
          <input type="checkbox" value="NEWS" v-model="blog.categories" />
      </div>
      <label>Author</label>
      <select v-model="blog.author">
          <option v-for="author in authors">{{author}}</option>
      </select>
      <button @click.prevent="post">Add Blog</button>
    </form>
    <div v-if="submitted">
        <h3>Thanks for adding your post</h3>
    </div>
    <div id="preview">
      <h3>Preview Blog</h3>
      <p>Blog Title: {{blog.title}}</p>
      <p>Blog Content:</p>
      <p>{{blog.content}}</p>
      <p>Blog Categories: </p>
      <ul>
          <li v-for="category in blog.categories">{{category}}</li>
      </ul>
      <p>Blog Author: {{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blog: { title: "", content: "", categories:[], author:"" },
      authors: ['Naman','Man','Aman'],
      submitted: false
    };
  },
  methods: {
      post: function(){
          this.$http.post('http://jsonplaceholder.typicode.com/posts',{
              title: this.blog.title,
              body: this.blog.content,
              userid: 2
          }).then(function(data){
              console.log(data);
              this.submitted=true;
          })
      }
  }
};
</script>

 <style>
#add-blog * {
  box-sizing: border-box;
}
#add-blog {
  margin: 20px auto;
  max-width: 500px;
}
label {
  display: block;
  margin: 20px 0 10px;
}
input[type="text"],
textarea {
  display: block;
  width: 100%;
  padding: 8px;
}
#preview {
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}
h3 {
  margin-top: 10px;
}
#checkboxes{
    display: inline-block;
    margin-right: 20px;

}
#checkboxes label{
    display: inline-block;
}
</style>