<template>
<div>
  <app-header v-bind:title="title" v-on:change="update($event)"></app-header>
  <app-person v-bind:persons="persons"></app-person>
  <app-footer v-bind:title="title"></app-footer>
</div>
</template>

<script>
import Header from './components/header.vue';
import Footer from './components/footer.vue';
import Persons from './components/view.vue';

export default {
  components:{
    'app-header': Header,
    'app-footer': Footer,
    'app-person': Persons
  },
  data () {
    return {
      title: 'My App',
      persons: [
        { name: "Ryu", speciality: "Vue Components", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false }
      ]
    }
  },
  methods:{
    update: function(event){
      this.title = event
    }
  }
}
</script>

<style>

</style>
 