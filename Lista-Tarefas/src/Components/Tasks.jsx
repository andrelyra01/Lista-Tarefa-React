import React from 'react'
import { ChevronRight , Trash } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from './Button';

// INICIAMOS COM A PROPS AQUI DEPOIS DESESTRUTURAMOS E COLOCAMOS AS FUNÇÕES AQUI
const Tasks = ({tasks,onTaskClick,onDeleteTaskClick}) => {

  const navigate = useNavigate()

  const onSeeDetailsClick = (item) => {
    // para ficar segura boa pratica
    const query = new URLSearchParams();
    query.set("title",item.title)
    query.set("description",item.description)
    navigate(`/task?${query.toString()}`)
  }


  return (
   
      <ul className='space-y-4 p-6 bg-slate-200 rounded-md shadow'>
        {tasks.map((item) => 
        <li key={item.id} className='flex gap-2'>
        
            <button onClick={() => onTaskClick(item.id)} className={`bg-slate-400 text-left w-full text-white p-2 rounded-md ${item.isCompleted && 'line-through'}`}>
            {item.title}
          
            </button>
         
          <Button onClick={() => onSeeDetailsClick(item)}>
            <ChevronRight />
          </Button>

          <Button onClick={() => onDeleteTaskClick(item.id)} >
            <Trash/>
          </Button>
        
        </li>
        )}
      </ul>
    
  )
}

export default Tasks
