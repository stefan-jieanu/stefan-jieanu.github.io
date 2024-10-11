export default function Navbar() {
  return (
    <div className='container flex mx-auto my-4 align-center justify-between'>
      <div>
        <h1 className='text-4xl text-blue-100 font-[Montserrat]'>Blog</h1>
        <p className='text-blue-100'>
          Made with React
        </p>
      </div>
      <div className='flex gap-8'>
        <p className='text-blue-100 text-4xl'>
          Work
        </p>
        <p className='text-gray-100 text-4xl'>
          Projects
        </p>
      </div>
    </div>
  )
}