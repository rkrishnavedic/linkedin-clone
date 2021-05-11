import React,{useState} from 'react';
import './login.css';
import loginSvg from './login.svg';
import TextField from '@material-ui/core/TextField';
import {auth} from '../../firebase/firebase';

const Login=()=>{


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const clearInputs=()=>{
        setEmail('');
        setPassword('');
        clearErrors();
    }

    const clearErrors=()=>{
        setEmailError('');
        setPasswordError('');
    }

    const Signin=(e)=>{
        e.preventDefault();

        auth.signInWithEmailAndPassword(email, password)
            .then((userCredential) => {
                console.log(userCredential);
                clearInputs();
            })
            .catch(err=>{
                switch (err.code) {
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                        setEmailError(err.message);
                        break;
                    case "auth/wrong-password":
                        setPasswordError(err.message);
                        break;
                    default: break;
                }
            })

    }


    return(
        <div className="login-page">

            <div className="login-center-container">
                <img src={loginSvg} alt='svg'/>
                <div className="login-container">
                    <h1>Sign in</h1>
                    <p>Stay updated on your professional world</p>
                    <form onSubmit={Signin}>
                        <TextField error={emailError!==''} helperText={emailError} value={email} onChange={(e)=>{clearErrors();setEmail(e.target.value)}} className="text-field" label="Email or Phone" variant="outlined" />
                        <TextField error={passwordError!==''} helperText={passwordError} value={password} onChange={(e)=>{clearErrors();setPassword(e.target.value)}} className="text-field" type="password" label="Password" variant="outlined" />

                        <p>Forgot password?</p>

                        <button onClick={Signin} className="button">Sign in</button>
                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login;