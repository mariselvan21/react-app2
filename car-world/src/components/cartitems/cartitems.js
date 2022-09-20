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
                            <p>{props.name}</p>
                        </div>
                        <div className='cart-items-offer'>
                            <p>{props.offer}%offer</p>
                        </div>
                        <div className='cart-items-details'>
                            <p>{props.details}</p>
                        </div>
                        <div className='cart-items-price'>
                            <p>Rs.{props.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems;