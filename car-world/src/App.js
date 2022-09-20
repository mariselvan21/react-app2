import './App.css';
import Header from './components/header/header';
import ProductHolder from './components/product-holder/product-holder';
import Login from './components/login/login';
import About from './components/about/about';
import ProductDescription from './components/product-description/product-description';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {Appcontext} from './components/context/context';
import CartItemsHolder from './components/cartItemsHolder/cart-items-holder';


function App() {



  const [isLogedin, setisLogedin] = useState("false");
  const [cartItems,setCartItems]=useState([]);

  function addToCart(product){
    setCartItems([...cartItems,product])
    console.log(cartItems);
  }

  function loginHandler(value) {
    setisLogedin(value);
  }
  

  return (
    <div className="App">
      <Appcontext.Provider value={{isLogedin,setisLogedin,cartItems,addToCart}}>
      <Header /> 
      
      <Routes> 
        
        <Route index element={isLogedin == "true" ? <ProductHolder /> : <Login login={loginHandler} />} />
        <Route path='about' element={<About />} />
        <Route path='product-holder' element={<ProductHolder />}><Route path='about' element={<About />} /></Route>
         <Route path='description/:id' element={<ProductDescription />} />  
        <Route path='cart' element={<CartItemsHolder />} />
      </Routes> 
       </Appcontext.Provider>
      
      </div>
  );
}

export default App;
