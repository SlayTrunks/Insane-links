import Link from 'next/link';
import React from 'react';
import { useState } from 'react';


function Navbar() {
  const [search,setSearch] = useState('')

  const handleChange = (e)=>{
    setSearch(e.target.value)
    
  }
  const handlepress = (e)=>{
    if(e.key === 'Enter'){
      e.preventDefault()
      window.location.href = `/find/${search}`
    }
  }
  return (
    <nav className="bg-gray-800  ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href={'/'} className="text-white font-bold text-xl cursor-pointer">Insane Links</Link>
            </div>
            <div className="hidden sm:block sm:ml-10  ">
              <div className="flex space-x-4">
                <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                <Link href="/about" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About Us</Link>
                <Link href="/contact" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
                <input  type="text" name="text" className="in " onKeyDown={handlepress} placeholder="Search username" onChange={handleChange} value={search}/>
 
              </div>
              
            </div>
          </div>
          <div className="-mr-2 flex sm:hidden">
            <button className="text-gray-500 hover:text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none">
              <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="sm:hidden flex ">
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link href="/" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
          <Link href="/about" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About Us</Link>
          <Link href="/contact" className="text-gray-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact Us</Link>
          <div className="contain mt-11">
  
</div>
        </div>
        
      </div>

    </nav>
  );
}

export default Navbar;
