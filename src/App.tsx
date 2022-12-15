import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import "./global.css";
import { TaskBoard } from "./components/TaskBoard";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "./components/Task";
import { CheckboxInput } from "./components/CheckboxInput";

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");

  const createdTask = tasks.length
  const [completedTask, setCompletedTask] = useState(0)


  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setNewTask(event.target.value)
  }

  function handleNewTaskInvalid(event:InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Este campo é obrigatório')
  }



  function deleteTask(taskToDelete:string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne)
  }
  
  

  const isNewTaskEmpty = newTask.length === 0;

  // function checkedTask() {
  //   const 
  // }
  
  return (
    <div className="App">
      <Header />
      <form 
      className={styles.formWrapper} 
      onSubmit={handleCreateNewTask}      
      >
        <Input 
        name='task'
        value={newTask}
        placeholder='Adicione uma nova tarefa'   
        onChange={handleNewTaskChange}    
        onInvalid={handleNewTaskInvalid}    
        />
        <Button type='submit' disabled={isNewTaskEmpty} />
      </form>

     
      <div className={styles.taskHeader}>
      <div className={styles.taskHeaderCriated}>
        <strong>Tarefas Criadas</strong>
        <p>{createdTask}</p>
      </div>
      <div className={styles.taskHeaderCompleted}>
        <strong>Concluídas</strong>
        <p>{completedTask} de {createdTask}</p>
      </div>
    </div>

      {tasks.length === 0 ? <TaskBoard /> : 
      tasks.map((task)=>{
        return(
         <Task
         content={task}
         onDeleteTask = {deleteTask}
         />
        )
      })

      }
      
    </div>
  );
}

export default App;
