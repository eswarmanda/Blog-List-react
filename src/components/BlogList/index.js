import './index.css'

import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogList} = props

  return (
    <ul className="ul-card">
      {blogList.map(eachBlog => (
        <BlogItem blogDetails={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogList
