import { Link, NavLink } from 'react-router-dom'
import '../CartWidget/CartWidget'
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


const NavBar = () => {
  return (
    <header>
        <Link to="/">
            <h1 className='text-center'>Child care line</h1>
        </Link>

        <nav>
            <ul>
                <li>
                  <NavLink to="/categoria/1">Girl section</NavLink>
                </li>

                <li>
                  <NavLink to="/categoria/2">Child section </NavLink>
                </li>
            </ul>
        </nav>
<CartWidget/>
    </header>
  )
}

export default NavBar