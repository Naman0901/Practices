<template>
<div id="show-blog" v-theme:column="'wide'">
    <h1>All Blog Articles</h1>
    <input type="text" v-model="search" placeholder="Search"/>
    <div class="single-blog" v-for="blog in filterBlog">
        <router-link v-bind:to="'/blog/'+blog.id"><h2 v-rainbow>{{blog.title | to-uppercase}}</h2></router-link>
        <article>{{blog.body | snippet}}</article>
    </div>

</div>
</template>

<script>
import searchMixin from '../mixins/searchMixin';

export default {
  
  data () {
    return {
        blogs:[],
        search: ''
    }
  },
  methods:{
    
  },
  created(){
      this.$http.get('http://jsonplaceholder.typicode.com/posts').then(function(data){
         this.blogs= data.body.slice(20,30);
      })
  },
  mixins:[searchMixin]
}
</script>


<style>
#show-blog{
    max-width: 800px;
    margin: 0 auto;
}
.single-blog{
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background-color: aqua;
    color: black;
}
</style>
 