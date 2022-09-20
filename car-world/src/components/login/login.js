import './login.css';
import { useState } from 'react';
import { useContext } from 'react';
import { Appcontext } from '../context/context';

function Login(props) {
    const isLogedin = useContext(Appcontext).isLogedin;

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState('');

    function updateEmail(e) {
        setEmail(e.target.value);
    }

    function updatePassword(e) {
        setPassword(e.target.value);
    }

    function updateForm(e) {
        e.preventDefault();
        if (email == "mari20041999@gmail.com" && password == '12345') {
            props.login("true")
        }
        else {
            alert('invalid user')
        }
    }
    return (
        <div className='form-box'>

            <div className='container'>
                <form className='form'onSubmit={updateForm}>
                    <fieldset className='fieldset'>
                        <label for='e-mail' className='form-label'>E-MAIL</label> <br />
                        <input id='e-mail' className='form-input' type='text' onChange={updateEmail} /><br />
                        <label for='password' className='form-label'>PASSWORD</label> <br />
                        <input id='password' className='form-input' type='password' onChange={updatePassword} /> <br /><br />
                        <input className='button' type='submit' /> 
                    </fieldset>
                </form>
            </div>
        </div>
    )
}

export default Login;