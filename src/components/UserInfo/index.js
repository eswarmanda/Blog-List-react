import './index.css'

const UserInfo = () => {
  console.log('userProfile')
  return (
    <div className="user-profile">
      <img
        className="dp"
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
      />
      <h1 className="user-name">Wade Warren</h1>
      <p>Software developer at UK</p>
    </div>
  )
}

export default UserInfo
