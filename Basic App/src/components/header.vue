<template>
<header>
<h1 @click="change">{{title}}</h1>
</header>
</template>

<script>
import {bus} from '../main';

export default {
    props: ['title'],
  data () {
    return {
      
    };
  },
  methods:{
    change: function(){
     // this.$emit('change','Vue Wizards');
     this.title=  'Vue Wizards'
     bus.$emit('change','Vue Wizards');
    }
  }
};
</script>

<style scoped>
header{
  background: lightgreen;
  padding: 10px;
}
h1{
  color: #222;
  text-align: center;
}
</style>
