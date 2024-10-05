export default function Navbar() {
  return (
    <div className='container flex mx-auto my-4 align-center justify-between'>
      <div>
        <h1 className='text-4xl text-blue-100 font-mono'>Blog</h1>
        <p className='text-blue-100'>
          Made with React
        </p>
      </div>
      <div className='flex gap-8'>
        <p className='text-blue-100 text-4xl'>
          L
        </p>
        <p className='text-gray-100 text-4xl'>
          G
        </p>
      </div>
    </div>
  )
}