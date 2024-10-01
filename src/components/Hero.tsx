import HeroConsole from './HeroConsole';

export default function () {
  return (
    <div className='container mx-auto flex justify-between items-center my-16'>
      <div>
        <h1 className='text-4xl text-blue-600'>Best web developer</h1>
        <p>Yes, and this is a portoflio website (work in progress)</p>
      </div>
      <HeroConsole />
    </div>
  )
}