import { FaReact } from "react-icons/fa";

export default function Description() {
  return (
    <div className='bg-gray-dark overflow-hidden'>
      <div className='container mx-auto flex py-10'>
        <div className='flex-1 z-10'>
          <h1 className='text-2xl font-[Inter] text-neutral-50 font-bold'>Who am I</h1>
          <p className='font-[Inter] text-neutral-50 pt-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <button className='font-[Inter] text-neutral-50 mt-4 py-2 px-4 border-l-2 border-r-2 border-neutral-50
                            hover:px-6 transition-all'>
            READ MORE
          </button>
        </div>
        <div className='flex-2'>
          <FaReact className='text-[10rem] scale-[250%] rotate-45' />
        </div>
      </div>
    </div>
  )
}