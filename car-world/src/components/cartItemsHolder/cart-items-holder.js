import './cart-items-holder.css';
import { useContext, useState } from 'react';
import { Appcontext } from '../context/context';
import CartItems from '../cartitems/cartitems';
import { useEffect } from 'react';

function CartItemsHolder(props) {

    const [cartItems,setCartItems] = useState([...props.cartItems])

    useEffect(()=>{
        setCartItems([...props.cartItems])
    },[props])
    

    

    
    
    return (
        <div className='cart-items-holder'>
            <div className='container'>
                <div className='cart-items-holder-box'>
                    <div className='cart-items-holder-wrapper'>
                        {cartItems.map((item) => {
                            return (<CartItems key={Math.random()} name={item.name} image={item.image} details={item.details} offer={item.offer} price={item.price} id={item.id} />)
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemsHolder;

