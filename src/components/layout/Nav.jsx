import logo from '../assets/logo.svg'
import Button from './Button';
const Nav = () => {
    return (
            <nav className='navbar'>
                <div className="branding">
                    <img src={logo} alt="Brand" width="132px" height="29px"/>
                </div>
                <ul className="nav-list">
                    <li className='nav-list_item'><a href="/" className='active'>Home</a></li>
                    <li className='nav-list_item'><a href="/">Product</a></li>
                    <li className='nav-list_item'><a href="/">Testimonials</a></li>
                    <li className='nav-list_item'><a href="/">FAQ</a></li>
                </ul>
                <div className="buttons">
                   <Button>Sign in</Button>
                   <Button version="secondary">Register</Button>
                </div>    
        </nav>
            
    )
}

export default Nav;