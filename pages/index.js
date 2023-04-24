import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Loading from './loading';
import Navbar from './navbar';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
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
    <>
   <Navbar/>
          <section className="mx-32 my-8 text-gray-600 body-font overflow-y-hidden">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-300">
              Insane Links
              <br className="hidden lg:inline-block" />
              Links for your socials
            </h1>
            <p className="mb-8 leading-relaxed">
              Welcome to Insane Link! Easily showcase all your important links
              in one place, whether it's your social media profiles, business
              website, or personal blog. Share your Insane Link with your
              followers and make it easy for them to connect with you.
            </p>
            <div className="flex justify-center">
              <Link
                href={'/create'}
                className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
              >
                Create
              </Link>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-xl"
              alt="hero"
              src="https://img.freepik.com/premium-photo/3d-glossy-social-media-logos-with-dark-background-side-side-position_519809-4.jpg "
            />
          </div>
        </div>
      </section>
    </>
  );
}
