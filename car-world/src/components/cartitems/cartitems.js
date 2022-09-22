import './cartitems.css';
import { useState } from 'react';
import { useContext } from 'react';
import { Appcontext } from '../context/context'

function CartItems(props) {
    var removeCartItems = useContext(Appcontext).removeCartItems;

    const [quantity, setQuantity] = useState(1);
    return (
        <div className='cart-items'>
            <div className='container'>
                <div className='cart-items-box'>
                    <div className='cart-items-wrapper'>
                        <div className='cart-items-image'>
                            <img className='cart-image' src={props.image} />
                        </div>
                        <div className='cart-items-name'>
                            <h5>Car model</h5>
                            <p>{props.name}</p>
                        </div>
                        <div className='cart-items-offer'>
                            <h5>Offer</h5>
                            <p>{props.offer}%</p>
                        </div>
                        <div className='cart-items-details'>
                            <h5>Details</h5>
                            <p>{props.details}</p>
                        </div>
                        <div className='cart-items-count'>
                            <h5>Count</h5>
                            <p>{quantity}</p>
                        </div>
                        <div className='cart-items-price'>
                            <h5>Amount</h5>
                            <p>Rs.{quantity * (props.price)}</p>
                        </div>
                    </div>
                    <button className='quantity-button1' onClick={() => {

                        setQuantity(quantity + 1);
                    }}>+</button>
                    <p className='quantity-num'>{quantity}</p>
                    <button className='quantity-button2' onClick={() => {
                        if (quantity > 1) {
                            setQuantity(quantity - 1);
                        }
                    }}>-</button>
                    <button className='remove-button' onClick={() => {
                        removeCartItems(props.id);
                    }} >Remove</button>
                    {/* <button className='undo-button' onClick={() => {
                        
                    }} >Undo</button>

 */}

                </div>
            </div>
        </div>
    )
}

export default CartItems;