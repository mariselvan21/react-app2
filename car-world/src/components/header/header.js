import { Link } from 'react-router-dom';
import './header.css';
import {useContext} from 'react';
import {Appcontext} from '../context/context';

function Header(){
    const isLogedin=useContext(Appcontext).isLogedin;
    const setisLogedin=useContext(Appcontext).setisLogedin;
    console.log(isLogedin);
    return(
    <header>
        <div className='container'>
            <div className='header-wrapper'>
                <div className='logo'>
                    <h1>CAR WORLD</h1>
                </div>
                <nav className='nav-bar'>
                    { isLogedin=="true" && <Link to='/' className='link' onClick={()=>{
                        setisLogedin("false");
                    }}>Logout</Link>}
                    <Link to='about' className='link'>About</Link>
                    { isLogedin=="true" && <Link to='product-holder' className='link'>ProductHolder</Link>}
                </nav>

            </div>
        </div>
    </header>
    )
}
export default Header;