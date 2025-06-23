import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkvalidate } from '../utils/validate';

const Login = () => {
    const[sigin,setsignin]=useState(true);
    const togglesign=()=>{
        setsignin(!sigin);
    }
const email=useRef(null);
const password=useRef(null);
const fullname=useRef(null);
const [message,setmessage]=useState(null);
    const handleclick=()=>{
      const name = !sigin ? fullname?.current?.value : "";
      const validity=checkvalidate(email.current.value,password.current.value,name);
       setmessage(validity);
    }
  return (
    <div >
        <Header/>
        <div className='absolute'>
            <img src='https://assets.nflxext.com/ffe/siteui/vlv3/8200f588-2e93-4c95-8eab-ebba17821657/web/IN-en-20250616-TRIFECTA-perspective_9cbc87b2-d9bb-4fa8-9f8f-a4fe8fc72545_small.jpg'/>
        </div>
        <form onSubmit={(e)=>e.preventDefault()} className='absolute w-3/12 bg-black my-36 mx-auto right-0 left-0 p-12 text-white bg-opacity-80'>
           <h1 className='font-bold text-3xl'>{sigin?"Sign In":"Sign Up"}</h1>
           {
            !sigin && <input ref={fullname} className='p-4 my-5 w-full bg-gray-500' type='text' placeholder='Full Name'></input>
           }
            <input ref={email} className='p-4 my-5 w-full bg-gray-500' type='text' placeholder='Email Address'></input>
            <input ref={password} className='p-4 my-5 w-full  bg-gray-500' type='password' placeholder='Password'></input>
            <p className='font-bold text-lg text-red-500'>{message}</p>
            <button onClick={handleclick} className='p-4 my-5 w-full rounded-lg bg-red-600'>{sigin?"Sign In":"Sign Up"}</button>
            {sigin?<p>New to Netflix? <span className='cursor-pointer hover:underline' onClick={togglesign}>Sign up now.</span></p>:
            <p>Already registered! <span className='cursor-pointer hover:underline' onClick={togglesign}>Sign In now.</span></p>}

        </form>
    </div>
  )
}

export default Login