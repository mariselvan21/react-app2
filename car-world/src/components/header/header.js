import { Link } from 'react-router-dom';
import './header.css';
import CartIcon from '../cartIcon/cartIcon';
import { useContext } from 'react';
import { Appcontext } from '../context/context';
import {useNavigate} from 'react-router-dom'

function Header() {
    var navigateto=useNavigate();
    const isLogedin = useContext(Appcontext).isLogedin;
    console.log(isLogedin);
    const setisLogedin = useContext(Appcontext).setisLogedin;
    // console.log(isLogedin);
    return (
        <header>
            <div className='container'>
                <div className='header-wrapper'>
                    <div className='logo'>
                        <h1>CAR WORLD</h1>
    
                    </div>
                    <div className='cartPlace' onClick={()=>{
                            navigateto('/cart/')
                        }}>
                    <CartIcon />
                    </div>   
                    <nav className='nav-bar'>
                    
                        {isLogedin == "true" && <Link to='/' className='link' onClick={() => {
                            setisLogedin("false");
                        }}>Logout</Link>}
                        <Link to='about' className='link'>About</Link>
                        
                        {isLogedin == "true" && <Link to='product-holder' className='link'>ProductHolder</Link>}
                    </nav>

                </div>
            </div>
        </header>
    )
}
export default Header;