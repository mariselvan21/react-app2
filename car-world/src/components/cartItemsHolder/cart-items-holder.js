import './cart-items-holder.css';
import { useContext } from 'react';
import { Appcontext } from '../context/context';
import CartItems from '../cartitems/cartitems';

function CartItemsHolder() {
    const cartItemList = useContext(Appcontext).cartItems;
    console.log(cartItemList);
    return (
        <div className='cart-items-holder'>
            <div className='container'>
                <div className='cart-items-holder-box'>
                    <div className='cart-items-holder-wrapper'>
                        {cartItemList.map((item) => {
                            return (<CartItems key={Math.random()} name={item.name} image={item.image} details={item.details} offer={item.offer} price={item.price} />)
                        }
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItemsHolder;

