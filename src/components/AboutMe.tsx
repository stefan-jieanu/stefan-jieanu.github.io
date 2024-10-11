import AboutMeItem from './AboutMeItem'
import { VscDebugBreakpointLog, VscDebugBreakpointLogUnverified } from "react-icons/vsc";
import { FaReact } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { GrNode } from "react-icons/gr";
import { FiGitlab } from "react-icons/fi";

export default function AboutMe() {

  const aboutMeContent = [
    {
      title: 'Frontend',
      desc: 'I know React, Javascript, Typescript, HTML5, CSS3 and other frontend stuff.'
    },
    {
      title: 'Backend',
      desc: 'I know how to use Django and Node.js for backend. Also databases with Postgresql and MongoDB.'
    },
    {
      title: 'DevOps',
      desc: 'Host any apps on cloud with AWS or Azure or anywhere else. CI/CD pipelines easy.'
    },
    {
      title: '3D',
      desc: 'I like doing 3D stuff from time to time; animations, websites, 3D models'
    }
  ]

  return (
    <div className='container mx-auto mt-16'>
      <h1 className='font-[Inter] text-4xl p-4 border-[6px] border-black w-fit mx-auto font-bold tracking-[0.8rem]'>ABOUT ME</h1>
      <div className='flex flex-wrap pt-4'>
        {aboutMeContent.map((item) => <AboutMeItem title={item.title} desc={item.desc} />)}
      </div>
      <div className='flex justify-center items-center my-12'>
        <VscDebugBreakpointLog />
        <VscDebugBreakpointLogUnverified className='text-2xl' />
        <VscDebugBreakpointLog className='text-3xl' />
        <VscDebugBreakpointLogUnverified className='text-4xl' />
        <VscDebugBreakpointLog className='text-3xl' />
        <VscDebugBreakpointLogUnverified className='text-2xl' />
        <VscDebugBreakpointLog />
      </div>
      <h1 className='font-[Inter] text-4xl p-4 border-[6px] border-black w-fit mx-auto font-bold tracking-[0.8rem]'>SKILLS</h1>
      <div className='flex flex-col md:flex-row justify-center py-12 gap-12'>
        <div className='flex flex-col items-center'>
          <FaReact className='text-8xl text-[#61dbfb]' />
          <p>REACT</p>
        </div>
        <div className='flex flex-col items-center'>
          <SiDjango className='text-8xl text-[#092e20]' />
          <p>DJANGO</p>
        </div>
        <div className='flex flex-col items-center'>
          <GrNode className='text-8xl text-[#68a063]' />
          <p>NODE.JS</p>
        </div>
        <div className='flex flex-col items-center'>
          <FiGitlab className='text-8xl text-[#f56a26]' />
          <p>GITLAB</p>
        </div>
      </div>
    </div>
  )
}