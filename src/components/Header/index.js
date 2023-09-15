// Write your JS code here
import {Link, withRouter} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-menu">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
  </nav>
)

export default withRouter(Header)
