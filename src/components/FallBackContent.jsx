import projectImg from '../assets/no-projects.png';
import Button from './Button';

export default function FallBackContent({ onAddProjectClick }) {
  return (
    <div className='mt-24  w-2/3 text-center '>
      <img
        className='w-16 h-16 object-contain mx-auto'
        src={projectImg}
        alt='A note pad for projects'
      />
      <h2 className='text-xl font-bold text-stone-500 my-4'>
        No Projects Selected
      </h2>
      <p className='text-stone-400 mb-4'>
        Select a project or get Started with a new one
      </p>
      <p className='mt-8'>
        <Button onClick={onAddProjectClick}> Create new Project </Button>
      </p>
    </div>
  );
}
