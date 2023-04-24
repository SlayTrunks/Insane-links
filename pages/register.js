import Link from 'next/link'
import React, { useState } from 'react'

const register = () => {
    const [text,setText] = useState({
        email:"",
        username:"",
        password:""

    })
    const onChange= (e)=>{
        setText({
            ...text,[e.target.name]:e.target.value
        })
    }
    const handleClick =(e) =>{
        e.preventDefault()
        console.log(text)
        setText({
            email:"",
            username:"",
            password:""
        })
    }
  return (
    <div className='flex lg:h-[100vh] sm:h-auto sm:w-auto lg:items-center md:items-center lg:ml-[33rem] sm:ml-32 md:ml-32 '>

         <div className="container">
        <div className="card">
            <a className="singup">Sign Up</a>
            <div className="inputBox1">
                <input type="text" required="required" onChange={onChange} value={text.email} name="email"/>
                <span className="user">Email</span>
            </div>

            <div className="inputBox">
                <input type="text" name='username' required="required" onChange={onChange} value={text.username} />
                <span>Username</span>
            </div>

            <div className="inputBox">
                <input type="password" required="required" onChange={onChange} value={text.password} name='password' />
                <span>Password</span>
            </div>

           <div className="flex justify-between gap-24 items-center ">
            <Link href={'/login' } className='text-black mb-7 hover:scale-110 hover:text-gray-900'>Login</Link>
           <button className="enter" onClick={handleClick}>Enter</button>
           </div>

        </div>
    </div>
    </div>
  )
}

export default register