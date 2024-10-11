import { FaLinkedin, FaGithub } from "react-icons/fa";
import { AiFillRobot } from "react-icons/ai";

export default function Hero() {
  return (
    <div className='hero-background'>
      <div className='container mx-auto flex pt-8 pb-16'>
        <div className='flex-[1.5]'>
          <AiFillRobot className='text-6xl -translate-x-4' />
        </div>
        <div className='flex-1 flex gap-12 items-center'>
          <a href='' className='font-[Inter] text-neutral-50 text-lg'>About me</a>
          <a href='' className='font-[Inter] text-neutral-50 text-lg'>Skills</a>
          <a href='' className='font-[Inter] text-lg py-2 px-4 bg-neutral-50 rounded-2xl'>CONTACT ME</a>
        </div>
      </div>
      <div className='container relative mx-auto flex justify-between items-center overflow-hidden py-40 z-10'>
        <div>
          <p className='text-2xl font-bold font-[Inter] pb-12'>Hi, I am</p>
          <h1 className='text-5xl font-[Inter] font-bold'>Stefan</h1>
          <p className='text-[1.5rem] font-[Inter] text-gray-light pb-20'>Software Developer / Fullstack Dev</p>
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
        <img src="/profile.png" className='scale-[1.7] -translate-x-14' />
        {/* <HeroConsole /> */}
      </div>
    </div>
  )
}