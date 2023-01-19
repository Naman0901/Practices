<template>
  <div id="person">
    <ul>
      <li v-for="p in persons" @click="p.show=!p.show">
       <h2>{{p.name}}</h2> 
       <h3  v-show="p.show">{{p.speciality}}</h3>
      </li>
    </ul>
    <button @click="del">Delete Person</button>
  </div>
</template>

<script>
export default {
  props:{persons:{
    type: Array,
    required: true
  }},
  data() {
    return {
      
    };
  },
  methods:{
    del: function(){
      this.persons.pop();
    }
  },
  /*beforeCreate(){
    alert('components creating');
  },
  created(){
    alert('created');
  },
  beforeMount(){
    alert('before Mount');
  },
  mounted(){
    alert('mounted');
  },
  beforeUpdate(){
    alert('before update');
  },
  updated(){
    alert('updated');
  }*/
};
</script>
<style scoped>
#person{
    width: 100%;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
}
ul{
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
}
li{
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    margin: 10px;
}
</style>
 