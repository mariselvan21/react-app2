import './product-description.css';
import {useParams} from 'react-router-dom';
import {useEffect,useState} from 'react';


function ProductDescription(){
    const params=useParams();
    //console.log(params.id);
    const[currentCar,setCurrentCar]=useState({});
    useEffect(()=>{
            fetch("https://6316ce94cb0d40bc4143c622.mockapi.io/cars/"+params.id).then((response) =>{
                console.log(response);
                if(response.ok){
                    return response.json();
                }
                return false;

            }).then((car) =>{
                setCurrentCar(car);
            })
    },[])


    return(
        <div className='product-description'>
            <div className='product-description-wrapper'>
                <div className='product-image'>
                    <img src={currentCar.image} width='350px' height='500px'></img>
                </div>
                <div className='product-detail'>
                    <h1>{currentCar.name}</h1>
                    <h1>{currentCar.price}</h1>
                    <h1>{currentCar.details}</h1>
                </div>
            </div>
        </div>
    )
}

export default ProductDescription;