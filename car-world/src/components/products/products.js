import './products.css'
import {useState} from 'react';
import ProductDescription from '../product-description/product-description';
import {Navigate, useNavigate} from 'react-router-dom'

function Product(props) {

    const[price,setPrice]=useState(props.price);
    const[dis,setDisabled]=useState(false);

    const navigateto=useNavigate();

    function changePrice(){
       
        let newPrice=props.price-((props.offer/100)*props.price);
        setPrice(newPrice);
        setDisabled(true);
    }
        function showProductDescription(){
            navigateto('/description/'+props.id)

        }

    return (
        <div className='product-box' onClick={showProductDescription}>
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