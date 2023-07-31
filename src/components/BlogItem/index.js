import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li className="list-item">
      <div className="title-date">
        <h1 className="title">{title}</h1>
        <p>{publishedDate}</p>
      </div>

      <p>{description}</p>
      <hr />
    </li>
  )
}

export default BlogItem
