import { useRef } from 'react';
import Button from './Button';
import Input from './Input';
import Modal from './Modal';

export default function AddNewProject({ onClickSave, handelCancelClick }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();

  const data = {
    title: '',
    description: '',
    dueDate: '',
    id: '',
  };

  function handleSaveData() {
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    //validate the data
    if (
      enteredTitle.trim() === '' ||
      enteredDescription.trim() === '' ||
      enteredDueDate.trim() === ''
    ) {
      modalRef.current.open();
      return;
    }

    data.title = enteredTitle;
    data.description = enteredDescription;
    data.dueDate = enteredDueDate;
    data.id = Math.random();

    onClickSave(data);
  }
  return (
    <>
      <Modal ref={modalRef} buttonCaption='Okay'>
        <h2 className='text-xl font-bold text-stone-700 my-4'>Invalid Input</h2>
        <p className='text-stone-600 mb-4'>
          Opps looks like y ou forgot to enter a value{' '}
        </p>
        <p className='text-stone-600 mb-4'>
          Pleasse provide a valid input for every field
        </p>
      </Modal>
      <div className='w-[35rem] mt-16'>
        <menu className='flex items-center justify-end gap-4 my-4'>
          <li>
            <button
              onClick={handelCancelClick}
              className='text-stone-800 hover:text-stone-950'>
              Cancel
            </button>
          </li>
          <li>
            <Button onClick={handleSaveData}> Save </Button>
          </li>
        </menu>
        <div>
          <Input ref={titleRef} name='title' label='Title' />
          <Input
            ref={descriptionRef}
            name='description'
            label='Description'
            textArea={true}
          />
          <Input ref={dueDateRef} type='date' name='dueDate' label='Due Date' />
        </div>
      </div>
    </>
  );
}
