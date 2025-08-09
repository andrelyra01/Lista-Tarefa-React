import React from 'react'
import {useState} from 'react'
import Input from './input'

function AddTask({onAddTaskSubmit}) {

    const [title,setTile] = useState("")
    const [description,setDescription] = useState("")

    console.log(title,description)


  return (
    <div className='space-y-4 p-6  bg-slate-200 rounded-md shadow flex flex-col'>
      <Input
      type="text"
       placeholder='Digite o Titulo da Tarefa' 
      
    //    alterando a tarefa conforme digitado no imput
       value={title}
       onChange={(e) =>  setTile(e.target.value)}
        />
      <Input type="text"
       placeholder='Digite a Descrição da Tarefa'
        value={description}
         onChange={(e) =>  setDescription(e.target.value)}
         />
         {/* quando clicar vai chmar a função */}
         <button 
            onClick={() => {
                // vericar se o titulo e description estão preenchidas
                if(!title || !description.trim()) {
                    return alert("Preencha o Titulo e a Descrição da Tarefa")
                }
                 onAddTaskSubmit(title, description)
                 setTile('')
                 setDescription('')
            }}
            className='bg-slate-500 text-white px-4 py-2 rounded-md font-medium cursor-pointer'>

            Adicionar
            </button>
    </div>
  )
}

export default AddTask
