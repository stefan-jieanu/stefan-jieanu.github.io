import { FaGears } from "react-icons/fa6";

interface AboutMeItemProps {
  title: string,
  desc: string
}

export default function AboutMeItem(props: AboutMeItemProps) {
  return (
    <div className='flex-[40%] my-12 mx-8 relative p-4 rounded-md hover:shadow-low transition-all cursor-pointer'>
      <FaGears className='absolute text-8xl -left-4 -top-4 text-neutral-400' />
      <h1 className='relative text-4xl font-bold text-[Inter] tracking-widest'>{props.title}</h1>
      <p className='relative pt-4'>{props.desc}</p>
    </div>
  )
}