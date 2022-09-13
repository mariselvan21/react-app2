import './App.css';
import Header from './components/header/header';
import ProductHolder from './components/product-holder/product-holder';
import Login from './components/login/login';
import About from './components/about/about';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom'

function App() {



  const [isLogedin, setisLogedin] = useState("false");

  function loginHandler(value) {
    setisLogedin(value);
  }

  return (
    <div className="App">
      <Header />
      {/* <Routes> 
        <Route index element={isLogedin == "true" ? <ProductHolder /> : <Login login={loginHandler} />} />
        <Route path='about' element={<About />} />
       </Routes>   */}
      </div>
  );
}

export default App;
