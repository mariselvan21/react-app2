import './cartitems.css';

function CartItems(props) {
    return (
        <div className='cart-items'>
            <div className='container'>
                <div className='cart-items-box'>
                    <div className='cart-items-wrapper'>
                        <div className='cart-items-image'>
                            <img className='cart-image' src={props.image}/>
                        </div>
                        <div className='cart-items-name'>
                            <h1>{props.name}</h1>
                        </div>
                        <div className='cart-items-offer'>
                            <h1>{props.offer}</h1>
                        </div>
                        <div className='cart-items-details'>
                            <h1>{props.details}</h1>
                        </div>
                        <div className='cart-items-price'>
                            <h1>{props.price}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;