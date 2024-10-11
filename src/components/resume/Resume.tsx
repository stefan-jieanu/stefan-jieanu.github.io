import ResumeItem from './ResumeItem';

export default function Resume() {

  const work_experience = [
    {
      title: 'IT Trainer (Part-Time)',
      company: 'Software Development Academy ',
      description: ['Teaching Python and JavaScript classes for students of all levels and ages. Courses range from introduction into programming to different industry standard frameworks (Django for Python and React for JavaScript and TypeScript).'],
      date: 'Sep 2024 - Now'
    },
    {
      title: 'Full Stack Developer',
      company: 'Mindhive Software',
      description: [
        'Developed highly performant frontend with TypeScript and React.',
        'Collaborated with teams to design, implement, and maintain API architectures for data storage, retrieval, and manipulation using Python, Django and PostgreSQL.',
        'Utilized Docker and Apache to deploy various websites and services on a Virtual Private Server (VPS) running Linux.'],
      date: 'Aug 2022 - Aug 2024'
    },
    {
      title: 'Blockchain Developer',
      company: 'ThoughtAI',
      description: [
        'Successfully integrated Bitcore mobile applications with the Thought blockchain, combining the features of Bitcore applications into the Thought blockchain ecosystem.',
        'Aquired comprehensive knowledge and expertise with Node.js and deploying applications.'],
      date: 'Jul 2021 - March 2022'
    }
  ]

  return (
    <div className='container mx-auto py-8'>
      <h1 className='text-5xl font-mono text-blue-100'>Resume</h1>
      {work_experience.map(item =>
        <ResumeItem title={item.title} company={item.company} description={item.description} date={item.date} />
      )}
    </div>
  )
}