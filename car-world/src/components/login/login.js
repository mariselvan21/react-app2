import './login.css';
import {useState} from 'react';
import {useContext} from 'react';
import { Appcontext } from '../context/context';

function Login(props){
    const isLogedin=useContext(Appcontext).isLogedin;

    const[email,setEmail]=useState("");
    const[password,setPassword]=useState('');

    function updateEmail(e){
           setEmail(e.target.value);
    }

    function updatePassword(e){
        setPassword(e.target.value);
    }

    function updateForm(e){
        e.preventDefault();
        if(email=="mari20041999@gmail.com" && password=='12345')
        {
            props.login("true")
        }
        else
        {
            alert('invalid user')
        }
    }
    return(
        <div className='form-box'>
            <div className='container'>
                <form onSubmit={updateForm}>

                    <label >e-mail</label> <br />
                    <input id='e-mail' className='e-mail' type='text' onChange={updateEmail}/><br/>
                    <label >password</label> <br />
                    <input id='password' className='password' type='password' onChange={updatePassword}/>
                    {isLogedin ? <input className='button' type='submit'/> : <input className='button' type='submit'disabled/>}

                </form>
            </div>
        </div>
    )
}

export default Login;