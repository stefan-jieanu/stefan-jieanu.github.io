import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container flex mx-auto align-center justify-between'>
      <div>
        <h1 className='text-4xl text-blue-600 font-mono'>Blog</h1>
        <p>
          Made with React
        </p>
      </div>
      <div className='flex gap-8'>
        <p className='text-blue-800 text-4xl'>
          L
        </p>
        <p className='text-gray-800 text-4xl'>
          G
        </p>
      </div>
    </div>
  )
}

export default App
