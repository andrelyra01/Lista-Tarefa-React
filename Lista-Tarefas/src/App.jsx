
import AddTask from './Components/AddTask'
import Tasks from './Components/Tasks'
import Title from './Components/Title'
import './index.css'
import {useEffect, useState} from 'react'
import {uid} from 'react-uid'


const App = () => {
  // ARMAZENAMOS UM USESTATE TASKS AQUI
  // se nao tiver nada no localstorage coloco uma lista vazio se nao pego o que tem dentro do localstorage
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || 
  []);

// ARMAZENANDO NO LOCALSTORAGE
// essa função e executado sempre que algum valor dentro da lista for alterado []
useEffect(() =>  {
  // esta salvando no localstorage
localStorage.setItem("tasks", JSON.stringify(tasks))

} ,[tasks]);


// quando criamos um useefect esssa função so e executada uma vez e ela so é executada quando o ususario termina de usar a aplicação
// useEffect(()  =>  {
//   const fetchTasks = async () => {
//     // CHAMOU A API
//     const response = await fetch('https://jsonplaceholder.typicode.com/users/1/todos?_limit=10',
//       {
//       method:"GET",
//     }
//   );

//   // PEGOU OS DADOS QUE A API RETORNA
//   const data = await response.json();

//   // ARMAZENAR/PERSISTIR ESSES DADOS NO STATE
//   setTasks(data)

//   console.log(data)
   
//   };

// // SE QUISE CHAMAR UMA API PARA PEGAR AS TAREFAS 
//    fetchTasks()
// } ,[])


// ATUALIZA O isCompleted DE CADA TAREFA ALTERA O ESTADO DE CADA TAREFA
const onTaskClick = (taskId) =>  {
  const newTasks =  tasks.map((item) =>  {
      if(item.id === taskId) {
        return {...item, isCompleted: !item.isCompleted}
      }

      // NÃO PRECISA ATUALIZAR ESA TAREFA
      return item

    });

    // DEPOIS ATUALIZA O USESTATE
    setTasks(newTasks)
}


// ESSA FUNÇÃO TIRA A TAREFA 
const onDeleteTaskClick = (taref) => {

    const newTasks = tasks.filter((item) =>  item.id !== taref);
    setTasks(newTasks)

}

// monta a nova tarefa pegando os parametros que foram passados
const onAddTasksSubmit = (title,description) => {
  const newTask = {
    id: uid,
     title,
     description,
    isCompleted: false,
  };

  // e atualiza os usestate
  setTasks([...tasks, newTask])
}




  return (
    <div className='w-screen h-screen  bg-slate-500 flex justify-center p-6'>
      <div className='w-[500px] space-y-4'>

        <Title>Gerenciador de Tarefas</Title>
      
        <AddTask onAddTaskSubmit={onAddTasksSubmit}/>
        {/* PASSAMOS UMA FUNÇÃO PARA ESSE COMPONENTE QUE RENDERIZA AS TAREFAS E QUNADO CLICAMOS ATUALIZA O ESTADO */}
        <Tasks 
        tasks={tasks} 
        onTaskClick={onTaskClick}
        onDeleteTaskClick={onDeleteTaskClick}
       
        />
      </div>
    </div>
  )
}

export default App


