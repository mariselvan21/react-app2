import './product-holder.css';
import { useEffect,useState } from 'react';
import Product from '../products/products'

import image1 from '../car-images/car-1.jpeg';
import image2 from '../car-images/car-2.jpeg';
import image3 from '../car-images/car-3.jpeg';
import image4 from '../car-images/car-4.jpeg';
import image5 from '../car-images/car-5.jpeg';
import image6 from '../car-images/car-6.jpeg';
import image7 from '../car-images/car-7.jpeg';
import { Outlet } from 'react-router-dom';

function ProductHolder(){

    

    var images=[image1,image2,image3,image4,image5,image6,image7];

    const [prodList,setProdList]=useState([])


    useEffect(() => {
        fetch('https://6316ce94cb0d40bc4143c622.mockapi.io/cars').then((response)  =>{
            if(response.ok){
                return response.json();
            }
            return false;
        }).then((data) =>{
            data.forEach((obj,i) => {
                obj.image=images[i%images.length]
                
            })
            setProdList(data);
        })
    },[]);
        
                 
    
    return(
        <div className='produc-holder'>
            <div className='container'>
                <div className='product-wrapper'>
                   {
                   prodList.map((product) => {
                   return( <Product key={Math.random()} name={product.name} price={product.price} details={product.details} offer={product.offer} image={product.image} id={product.id}></Product>)})
                   }
                </div>
            </div>
            {/* <Outlet></Outlet> */}
        </div>
    )
}

export default ProductHolder;
