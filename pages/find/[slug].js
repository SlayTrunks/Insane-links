import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Loading from '../loading'
import Navbar from '../navbar';

const Slug = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [items, setItems] = useState();

  useEffect(() => {
    if (router.query.slug) {
      fetch(`/api/getid/${router.query.slug}`)
        .then((res) => res.json())
        .then((data) => setItems(data));
    }
  }, [router]);
  console.log(items);

  
  return(
    <>
    <Navbar/>
   {
    items ?  <div className='h-[88vh] w-[100vw] bg-gray-300   overflow-hidden flex items-center justify-center'>
      
    <div className='   w-[50vw] flex flex-col gap-6 justify-center'>
      <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" className='h-20 w-16 mx-auto' alt="profile" />
    <h1 className='text-black text-4xl font-bold capitalize mx-auto'>{items.username}</h1>
        {
          items.facebook && <a href={items.facebook} target='_blank' className='text-4xl text-[#f5f6f7] bg-gradient-to-r rounded-xl font-sans  bg-[#4267b2] text-center cursor-pointer  '>Facebook</a> 
        }
       {
        items.github &&  <a href={items.github} target='_blank' className='text-4xl text-[#f5f6f7] font-sans rounded-xl   bg-[#171515] text-center cursor-pointer  '>github </a>
       }
       { items.instagram && <a href={items.instagram} target='_blank' className='text-4xl text-[#f5f6f7] bg-gradient-to-r rounded-xl font-sans  bg-[#d62976] text-center cursor-pointer  '>Instagram</a>}
        {
          items.linkedin && <a href={items.linkedin} target='_blank' className='text-4xl text-[#f5f6f7] bg-gradient-to-r rounded-xl font-sans  bg-[#0077b5] text-center cursor-pointer  '>Linkedin</a>
        }
       {items.reddit && <a href={items.reddit} target='_blank' className='text-4xl text-[#f5f6f7] bg-gradient-to-r rounded-xl font-sans  bg-[#ff4500] text-center cursor-pointer  '>Reddit</a>}
        {items.twitter && <a href={items.twitter} target='_blank' className='text-4xl text-[#f5f6f7] bg-gradient-to-r rounded-xl font-sans  bg-[#00acee] text-center cursor-pointer  '>Twitter</a>}
    </div>
</div>
: <Loading/>

   }
   </>
  )
};

export default Slug;