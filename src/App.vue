<template>
  <div id="app">
      <BlogHeader></BlogHeader>
      <router-view></router-view>
  </div>
</template>

<script>

import BlogHeader from './components/BlogHeader'
import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'

export default {
  name: 'App',
  components: {
    BlogHeader,ShowBlogs,AddBlog
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
