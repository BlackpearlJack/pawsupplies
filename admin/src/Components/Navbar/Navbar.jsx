import images from '../../Constants/images'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
        <img src={images.logo} alt="" className="nav-logo" /><p>Pawsupplies Admin Panel</p>
        <img src={images.profile} alt="" className="nav-profile" />
    </div>
  )
}

export default Navbar