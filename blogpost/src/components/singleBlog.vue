<template>
    <div id="single-block">
        <h1>{{blog.title | to-uppercase}}</h1>
        <article>{{blog.body}}</article>
    </div>
</template>

<script>
export default {
    data(){
        return{
            id: this.$route.params.id,
            blog:{}
        }
    },
    created(){
        this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id)
        .then(function(data){
            this.blog=data.body
        })
    }
}
</script>