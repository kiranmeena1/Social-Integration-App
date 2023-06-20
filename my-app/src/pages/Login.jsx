import React from 'react'
import Google from "../img/google.png";
import Github from "../img/github.png";
import {Link} from "react-router-dom";

const Login = () => {
    const google = () => {
      window.open("http://localhost:5000/auth/google", "_self");
    };
    const github = () => {
      window.open("http://localhost:5000/auth/google", "_self");
    };
    
  
  return (
    <>
    <div className='login-container'>
         <div className='heading'>
    <span className='title'>Welcome to Spark Foundation</span>
    </div>

    <div className='img'>
    <img src="https://tse4.mm.bing.net/th?id=OIP.zCCqBHRSiyWAmoqUR6uhagAAAA&pid=Api&P=0&h=180 "  alt=" " className="avatar"/>
     </div>
    <div className='login'>
        <h1 className="loginTitle">Choose a Login Method</h1>
        <div className='wrapped'>
            <div className='left'>
                <div className='loginButton google' onClick={google}>
            <img src={Google} alt="" className='icon' />
            Google
                </div>
                <div className='loginButton github' onClick={github} >
            <img src={Github} alt="" className='icon' />
            Github
                </div>
            </div>

            <div className='center'>
              <div className='or'>OR</div>
            </div>

            <div className='right'>
            <input type="text"placeholder="Username"/>
            
            <input type="text"placeholder="Password"/>
          <button className="submit"><Link Link className='LINK' to="/">Login</Link></button>
        </div>
    </div>
    </div>
    </div>
 
    </>
  )
}

export default Login