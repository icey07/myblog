<template>
	<div id="show-blogs">
		<h1>博客总览</h1>
		<input type="text" name="" v-model="search" placeholder="搜索">
		<div v-for="blog in filteredBlogs" class="single-blog">
			<router-link v-bind:to="'/singleBlog/'+blog.id">
				<h2 v-rainbow>{{blog.title | to-uppercase}}</h2>
			</router-link>
			<article>{{blog.body}}</article>
		</div>
	</div>
</template>
<script type="text/javascript">
	export default{
	  name:'ShowBlogs',
	  data:function(){
	     return{
	        blogs:[],
	        search:""
	     }
	},
	directives:{
	'rainbow':{
	   bind(el,binding,vnode){
	    el.style.color='#'+Math.random().toString(16).slice(2,8);
	}
}
},
	created(){
       this.$http.get('./../static/posts.json').then(function(data){
          this.blogs=data.body.slice(0,10);
       })
    },
    computed:{
      filteredBlogs:function(){
        return this.blogs.filter((blog=>{
          return blog.title.match(this.search);
          }))
      }
    },
    filters:{
       toUppercase(value){
          return value.toUpperCase();
       }
    }
}
</script>
<style type="text/css" scoped="scoped">
#show-blogs{
	max-width:800px;
	margin:0 auto;
}
#show-blogs a{
	color:#444;
	text-decoration:none;
}
.single-blog{
	box-sizeing:border-box;
	padding:20px;
	margin:20px 0;
	background:#eee;
	border:1px dotted #aaa;
}
input[type="text"]{
	width:100%;
	padding:8px;
	box-sizing:border-box;
}

</style>