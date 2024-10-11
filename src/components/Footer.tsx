import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function Footer() {
  return (
    <div className='bg-neutral-900'>
      <div className='container mx-auto py-12'>
        <div className='flex justify-center flex-col items-center gap-2'>
          <MdKeyboardDoubleArrowUp className='text-neutral-50 text-xl' />
          <p className='text-neutral-50 font-[Inter] tracking-widest text-sm'>BACK TO TOP</p>
        </div>
      </div>
    </div>
  )
}