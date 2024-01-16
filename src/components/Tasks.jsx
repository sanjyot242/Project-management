import { useState } from 'react';

useState;
export default function Tasks({ onAdd, viewTask, deleteTask }) {
  const [enteredTask, setEnteredTask] = useState();

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function onAddTaskHandler() {
    onAdd(enteredTask);
    setEnteredTask('');
  }

  function onDeleteTask(id) {
    deleteTask(id);
  }

  return (
    <section>
      <h2 className='text-2xl font-bold text-stone-600 mb-2'>Tasks</h2>
      <div className='flex items-center gap-4'>
        <input
          className='w-72 p-1 border-b-2 rounded-sm border-stone-300 bg-stone-200 focus:outline-none focus:border-stone-600'
          type='text'
          onChange={handleChange}
          value={enteredTask}
        />
        <button
          onClick={onAddTaskHandler}
          className='text-stone-700 hover:text-stone-950'>
          Add Task
        </button>
      </div>
      {viewTask.length === 0 && (
        <p className=' text-stone-800 my-4'>
          The current project doesnt have any tasks !
        </p>
      )}
      {viewTask.length > 0 && (
        <ul className='p-4 mt-8 rounded-md bg-stone-100'>
          {viewTask.map((task) => (
            <li key={task.id} className='flex justify-between my-4'>
              <span>{task.text}</span>
              <button
                onClick={() => onDeleteTask(task.id)}
                className='text-stone-700 hover:text-red-500'>
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
