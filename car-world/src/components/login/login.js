import './login.css';
import {useState} from 'react'

function Login(props){

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
        if(email=="x" && password=='123')
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
                    <input className='button' type='submit'/>

                </form>
            </div>
        </div>
    )
}

export default Login;