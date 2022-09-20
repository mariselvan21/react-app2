import './cartIcon.css';
import { Appcontext } from '../context/context';
import {useContext} from 'react';

function CartIcon(){
    var cartItems=useContext(Appcontext).cartItems;
    return(
        <div className='cartIcon-holder'>
            <div className='cartIcon'>
            &#128722;
            </div>
            <div className='cartIconNumber'>
                {cartItems.length}
            </div>
        </div>
    )
}
export default CartIcon;