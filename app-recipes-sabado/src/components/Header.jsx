/* 
    rfce -> Función regular
    rafce  -> Función flecha
*/
import './Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <Link className='enlace' to="/register">Register</Link>
            <Link className='enlace' to="/login">Login</Link>
        </header>
    )
}

export default Header