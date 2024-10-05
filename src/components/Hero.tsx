import HeroConsole from './HeroConsole';

export default function Hero() {
  return (
    <div className='hero-background'>
      <div className='container relative mx-auto flex justify-between items-center py-24 z-10'>
        <div>
          <h1 className='text-6xl text-blue-100 font-mono'>Best web developer</h1>
          <p className='text-blue-100'>Yes, and this is a portoflio website (work in progress)</p>
        </div>
        <HeroConsole />
      </div>
    </div>
  )
}