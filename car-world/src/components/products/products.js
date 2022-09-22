import './products.css'
import { useState } from 'react';
import ProductDescription from '../product-description/product-description';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { Appcontext } from '../context/context';

function Product(props) {

    
    

    const [price, setPrice] = useState(props.price);
    const [dis, setDisabled] = useState(false);

    const[disable,setDisable]=useState(false);

    const navigateto = useNavigate();

    function changePrice() {

        let newPrice = props.price - ((props.offer / 100) * props.price);
        setPrice(newPrice);
        setDisabled(true);
    }
    function showProductDescription() {
        navigateto('/description/' + props.id)

    }

    

    return (
        <div className='product_box' >
            <div className='box-clickable' onClick={showProductDescription}>
                <div className='product_image'>
                    <img src={props.image}></img>
                </div>
                <div className='product_details'>
                    <h2>{props.name} </h2>
                    <h2>Rs.{price}</h2>
                    <p>{props.details}</p>
                    <p>{props.offer}%offer </p>
                </div>
            </div>
            <button onClick={changePrice} disabled={dis}>Offer apply</button>
            <button onClick={()=>{
                props.add(props.item)
                setDisable(true)
            }} disabled={disable}>AddToCart</button>

        </div >

    )
}

export default Product;