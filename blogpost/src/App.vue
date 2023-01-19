<template>
<div>
  <app-header></app-header>
  <router-view></router-view>
</div>
</template>

<script>
import addBlog from './components/addBlog.vue';
import showBlog from './components/showBlog.vue';
import listBlog from './components/listBlog.vue';
import Header from './components/header.vue';

export default {
  components:{
    'add-blog': addBlog,
    'show-blog': showBlog,
    'list-blog' :listBlog,
    'app-header': Header
  },
  data () {
    return {
    }
  },
  methods:{
    
  }
}
</script>


<style>
body {
  margin: 0;
  font-family: "Nunito SemiBold";
  background-color: darkslategray;
  color: white;
}
</style>
 