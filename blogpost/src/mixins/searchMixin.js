export default{
    computed:{
        filterBlog: function(){
            return this.blogs.filter((blog)=>{
                return blog.title.match(this.search)
            })
        }
    }
}