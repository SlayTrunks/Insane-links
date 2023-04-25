import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Loading from './loading'


const Create = () => {
    const [text,setText] = useState({
        username:"",
        facebook:"",
        instagram:"",
        twitter:"",
        github:"",
        reddit:"",
        linkedin:""
    })
    const handleChange= (e)=>{
        setText({
            ...text,[e.target.name]:e.target.value
        })
    }
    const handleClick =(e) =>{
        e.preventDefault()
        console.log(text)
        fetch('/api/addLinks',{
          method:'POST',
          headers:{
            'Content-Type':'application/json'
          },
          body:JSON.stringify(text)
        }).then(res=>{{
          if(res.ok){
            <Loading/>
            alert('successfully Created')
            return res.json()
            .then(data=>console.log(data))
            
          }else{
            alert('Username already taken')
          }
        }})
        
       
        setText({
            username:"",
            facebook:"",
            instagram:"",
            twitter:"",
            github:"",
            reddit:"",
            linkedin:""
        })
    }
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      const timeout = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
    
      return () => clearTimeout(timeout);
    }, []);
    
    if (isLoading) {
      return <Loading />;
    }
   
      return (
    <div className='h-[100vh] '>
        <div className="login-box">
 <form>
 <div className="user-box first sm:mt-20 ">
     <input type='text' name="username" onChange={handleChange} value={text.username} />
     <label>Username</label>
   </div>
   <div className="user-box">
     <input type='text' name="facebook" onChange={handleChange} value={text.facebook} />
     <label>Facebook Link    </label>
   </div>
   <div className="user-box">
     <input type='text' name="instagram" onChange={handleChange} value={text.instagram} />
     <label>Instagram Link    </label>
   </div>
   <div className="user-box">
     <input type='text' name="twitter" onChange={handleChange} value={text.twitter} />
     <label>Twitter Link    </label>
   </div>
   <div className="user-box">
     <input type='text' name="github" onChange={handleChange} value={text.github} /> 
     <label>Github Link    </label>
   </div>
   <div className="user-box">
     <input type='text'  name="reddit" onChange={handleChange} value={text.reddit} />
     <label>Reddit Link</label>
   </div>
   <div className="user-box">
     <input type='text'  name="linkedin" onChange={handleChange} value={text.linkedin} />
     <label>LinkedIn Link    </label>
   </div><center>
   <button onClick={handleClick}>
          Create
      <span></span>
   </button>
   </center>
   
 </form>
</div>
    </div>
  )
}

export default Create