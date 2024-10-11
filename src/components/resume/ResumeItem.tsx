interface ResumeItemsProps {
  title: string;
  company: string;
  date: string;
  description: string[];
}

export default function ResumeItem(props: ResumeItemsProps) {
  return (
    <div className='my-4 py-2 hover:shadow-lg hover:cursor-pointer hover:-translate-y-2 transition-all'>
      <div className='flex justify-between'>
        <div>
          <h1 className='text-2xl text-blue-100'>{props.title}</h1>
          <p className='text-lg text-blue-100'>{props.company}</p>
        </div>
        <p className='text-blue-100'>{props.date}</p>
      </div>
      <ul className='list-disc ml-4'>
        {props.description.map(item =>
          <li className='text-blue-100'>{item}</li>
        )}
      </ul>
    </div>
  )
}