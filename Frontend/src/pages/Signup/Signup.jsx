import React, { useContext, useState } from 'react'
import './signup.css'
import { GoogleLogin } from '@react-oauth/google'
import axios from 'axios'
import { DarkMode } from '../../context/DarkMode'
import { Link } from 'react-router-dom'


function Signup() {
    const {Dark} = useContext(DarkMode)
    const [login, setlogin] = useState('signup')
    const LoginHandler = () => {
        setlogin('login')
    }
    const SignupHandler = () => {
        setlogin('signup')
    }
  return (
    <div className="signup">
        <div className={`newsignup ${Dark}`}>
         <Link to='/'><p>Back</p></Link> 
        <h1>H-LIBRARY</h1>
     
        {login === 'signup' ?
        <div className='login'>
          <label htmlFor="">username</label>
          <input type="text" placeholder="Enter you're username" />
          <label htmlFor="">Email</label>
         <input type="text" placeholder="Enter you're Email" />
         <label htmlFor="">password</label>
         <input type="text" placeholder='Enter password' />
       </div>
       :
       <div className='login'>
         <label htmlFor="">Email</label>
         <input type="text" placeholder="Enter you're Email" />
         <label htmlFor="">password</label>
         <input type="text" placeholder='Enter password' />
       </div>
        }
        <button>submit</button>
        <GoogleLogin
  onSuccess={async (response) => {
    try {
      console.log("Google response:", response.credential);

      const backendResponse = await axios.post("http://localhost:4000/google-login", {
        cred: response.credential
      });

      localStorage.setItem("fala-token", backendResponse.data.token);
      alert("signup successful!");
      window.location.replace("/");
    } catch (error) {
      console.error("Google login error:", error);
      alert("Google login failed");
    }
  }}
  onError={() => {
    console.log("Google Login Failed");
  }}
/>
       {login === 'signup' ? (<p onClick={LoginHandler}>Already have Account!</p>) : (<p onClick={SignupHandler}>Create An Account!</p>)}
    </div>
   </div>
  )
}

export default Signup