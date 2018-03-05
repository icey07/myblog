<template>
	<div id="add-blog">
		<h2>添加博客</h2>
		<form v-if="!submited" @submit.prevent="addBlog">
			<label>博客标题：</label>
			<input type="text" placeholder="请输入博客主题" name="" v-model="blog.title">
			<label>内容:</label>
			<textarea rows="10" v-model="blog.body"></textarea>
			<div id="checkboxes">
				<label>Vue.js</label>
				<input type="checkbox" name="" v-model="blog.categories" value="Vue.js">
			    <label>Angular4.js</label>
			    <input type="checkbox" name="" v-model="blog.categories" value="Angular4.js">
			    <label>Node.js</label>
			    <input type="checkbox" name="" v-model="blog.categories" value="Node.js">
			    <label>React.js</label>
			    <input type="checkbox" name="" v-model="blog.categories" value="React.js">
			</div>
			
			<label>作者：</label>
			<select v-model="blog.author">
				<option v-for="author in authors">{{author}}</option>
			</select>
			<button type="submit">添加博客</button>
		</form>
        <div v-if="submited">
        	<h3>您的博客发布成功</h3>
        </div>
		<div id="preview">
			<h3>博客总览</h3>
			<p>博客标题：{{blog.title}}</p>
			<p>博客内容：</p>
			<p>{{blog.body}}</p>
			<p>分类：</p>
			<ul>
				<li v-for="category in blog.categories">{{category}}</li>
			</ul>
		</div>
		
	</div>
</template>
<script type="text/javascript">
	export default{
	name:'AddBlog',
	data:function(){
      return {
         blog:{
           title:"",
           body:"",
           categories:[],
           userId: 1,
           author:""
        },
        authors:["Herry","Jimes","Lily","Tom","Anganla"],
        submited:false
      }
    },
	methods:{
		addBlog(){
	      this.$http.post('./../static/posts.json',this.blog).then(function(response){
	           this.submited=true;
	  })
	     }
	}
}
</script>
<style type="text/css" scoped="scoped">
#add-blog *{
	box-sizing:border-box;
}
#add-blog{
	margin:20px auto;
	max-width:600px;
	padding:20px;
}
label{
	display:block;
	margin:20px 0px 10px;
}
input[type='text'],textarea,select{
	display:block;
	width:100%;
	padding:8px;
}
textarea{
	height:200px;
}
#checkboxes label{
	display:inline-block;
	margin-top:0;
}
#checkboxes input{
	display:inline-block;
	margin-right:10px;

}
button{
  display: block;
  margin: 20px 0;
  background: crimson;
  color: #fff;
  border: 0;
  padding: 14px;
  border-radius: 4px;
  font-size: 18px;
  cursor: pointer;
}

#preview{
  padding: 10px 20px;
  border: 1px dotted #ccc;
  margin: 30px 0;
}

h3{
  margin-top: 10px;
}
</style>