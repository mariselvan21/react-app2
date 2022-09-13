import './products.css'
import {useState} from 'react'

function Product(props) {

    const[price,setPrice]=useState(props.price);
    const[dis,setDisabled]=useState(false);

    function changePrice(){
        let newPrice=props.price-((props.offer/100)*props.price);
        setPrice(newPrice);
        setDisabled(true);
    }


    return (
        <div className='product-box'>
            <div className='product-image'>
                <img src={props.image}></img>
            </div>
            <div className='product-details'>
                <h2>{props.name} </h2>
                <h2>Rs.{price}</h2>
                <p>{props.details}</p>
                <p>{props.offer}%offer </p>
                <button onClick={changePrice} disabled={dis}>Offer apply</button>
            </div>
        </div>

    )
}

export default Product;