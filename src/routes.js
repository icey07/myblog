import ShowBlogs from './components/ShowBlogs'
import AddBlog from './components/AddBlog'
import SingleBlog from './components/SingleBlog'

export default[
   {path:'/',component:ShowBlogs},
   {path:'/addBlog',component:AddBlog},
   {path:'/singleBlog/:id',component:SingleBlog}
]