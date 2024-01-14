import Button from './Button';
import Input from './Input';

export default function AddNewProject() {
  return (
    <div className='w-[35rem] mt-16'>
      <menu className='flex items-center justify-end gap-4 my-4'>
        <li>
          <button className='text-stone-800 hover:text-stone-950'>
            Cancel
          </button>
        </li>
        <li>
          <Button> Save </Button>
        </li>
      </menu>
      <div>
        <Input label='Title' />
        <Input label='Description' textArea={true} />
        <Input label='Due Date' />
      </div>
    </div>
  );
}
