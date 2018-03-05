<template>
	<div id='single-blog'>
		<h1>{{ blog.title }}</h1>
		<article>{{ blog.body }}</article>
		<p>作者：{{ blog.author }}</p>
		<p>分类：</p>
		<ul>
			<li v-for="category in blog.categories">
				{{category}}
			</li>
		</ul>
	</div>
</template>
<script type="text/javascript">
	export default{
		name:'SingleBlog',
		data:function(){
		    return {
               blog:{},
               id:this.$route.params.id
		    }
		  },
		 created(){
		    this.$http.get('./../static/posts.json').then(function(data){
		        var body=data.body;
                 for(let key in body){
                 if(this.id==body[key].id)
                   this.blog=body[key];
                 }
              })
		}
	  
	}
</script>
<style type="text/css" scoped="scoped">
	#single-blog{
    max-width:960px;
    margin:0 auto;
    padding:20px;
    background:#eee;
    border:1px dotted #aaa;
    }
</style>