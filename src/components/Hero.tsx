import { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillRobot } from "react-icons/ai";


export default function Hero() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width > 768 ? (
    <div className='hero-background-desktop'>
      <div className='container mx-auto flex pt-8 lg:pb-16'>
        <div className='flex-[1.5]'>
          <AiFillRobot className='text-6xl -translate-x-4' />
        </div>
        <div className='flex-1 flex md:gap-8 lg:gap-12 items-center'>
          <a href='' className='font-[Inter] text-neutral-50 md:text-md lg:text-lg'>About</a>
          <a href='' className='font-[Inter] text-neutral-50 md:text-md lg:text-lg'>Skills</a>
          <a href='' className='font-[Inter] md:text-sm lg:text-lg py-2 px-4 bg-neutral-50 rounded-2xl'>CONTACT ME</a>
        </div>
      </div>
      <div className='container relative mx-auto flex justify-between items-center overflow-hidden md:py-10 lg:py-40 z-10'>
        <div>
          <p className='md:text-xl lg:text-2xl font-bold font-[Inter] md:pb-8 lg:pb-12'>Hi, I am</p>
          <h1 className='md:text-3xl lg:text-5xl font-[Inter] font-bold'>Stefan</h1>
          <p className='md:text-xl lg:text-[1.5rem] font-[Inter] text-gray-light pb-20'>Software Developer / Fullstack Dev</p>
          <div className='flex mt-2 gap-4'>
            <a className='flex items-center p-2 bg-gray-light-2 shadow-lg rounded-lg 
                          transition-colors font-[Inter]' href="">
              LinkedIn <FaLinkedin className='ml-2 text-2xl text' />
            </a>
            <a className='flex items-center p-2 bg-gray-light-2 shadow-lg rounded-lg 
                          transition-colors font-[Inter]' href="">
              Github <FaGithub className='ml-2 text-2xl' />
            </a>
          </div>
        </div>
        <img src="/profile.png" className='md:scale-[1.2] lg:scale-[1.7] md:-translate-x-6 lg:-translate-x-14' />
        {/* <HeroConsole /> */}
      </div>
    </div>
  ) : (
    <div className='bg-black relative'>
      <img src="/profile.png" className='ml-auto pt-8' />
      <div className='absolute flex top-0 w-full p-4 justify-between items-center'>
        <div className=''>
          <AiFillRobot className='text-neutral-50 text-4xl' />
        </div>
        <div className=''>
          <a href='' className='font-[Inter] text-neutral-50 md:text-md lg:text-lg'>About</a>
        </div>
      </div>
      <div className='absolute hero-background-mobile w-full h-full top-0 z-10'></div>
      <div className='flex absolute bottom-0 px-4 w-full justify-between z-20'>
        <div className='pt-10'>
          <p className='md:text-xl lg:text-2xl text-neutral-50 font-bold font-[Inter]'>Hi, I am</p>
          <h1 className='text-2xl md:text-3xl lg:text-5xl font-[Inter] text-neutral-50 font-bold'>Stefan</h1>
          <p className='md:text-xl lg:text-[1.5rem] font-[Inter] text-neutral-50 pb-4'>Software Developer / Fullstack Dev</p>
        </div>
        <div className='flex flex-col justify-evenly pb-4'>
          <a className='' href="">
            <FaLinkedin className='ml-2 text-2xl text-neutral-50' />
          </a>
          <a className='' href="">
            <FaGithub className='ml-2 text-2xl text-neutral-50' />
          </a>
        </div>
      </div>
    </div>
  )
}