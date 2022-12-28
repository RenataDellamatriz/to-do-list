import styles from "./App.module.css";
import { Button } from "./components/Button";
import { Header } from "./components/Header";
import { Input } from "./components/Input";
import "./global.css";
import { TaskBoard } from "./components/TaskBoard";
import React, { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
import { Task } from "./components/Task";
import { CheckboxIndicatorProps } from "@radix-ui/react-checkbox";
import useWindowSize from './hooks/useWindowSize';

function App() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const createdTask = tasks.length;

  const [checkedTasks, setCheckedTasks] = useState<string[]>([]);
  const completedTask = checkedTasks.length; 

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTask(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Este campo é obrigatório");
  }

  function deleteTask(taskToDelete: string) {
    const tasksWithoutDeletedOne = tasks.filter((task) => {
      return task !== taskToDelete;
    });    
    const tasksCheckedWithoutDeletedOne = checkedTasks.filter((value) => {
      return value !== taskToDelete
    })
    setTasks(tasksWithoutDeletedOne);
    setCheckedTasks(tasksCheckedWithoutDeletedOne)
  }
  
  const isNewTaskEmpty = newTask.length === 0;

  function checkedTask(task: string, checked: boolean) {
    if (checked) {
      setCheckedTasks((value) => [...value, task]);
    } else {
      const filteredTasks = checkedTasks.filter((value) => {
        return value !== task;        
      });
      setCheckedTasks(filteredTasks);
    }
  }
  const size = useWindowSize()

  return (
    <div className="App">
      <Header />
      <form className={styles.formWrapper} onSubmit={handleCreateNewTask}>
        <Input
          name="task"
          value={newTask}
          placeholder={size.width <= 500 ? "Adicione" :"Adicione uma nova tarefa" }
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
        />
        <Button type="submit" disabled={isNewTaskEmpty} />
      </form>

      <div className={styles.taskHeader}>
        <div className={styles.taskHeaderCriated}>
          <strong>Tarefas Criadas</strong>
          <p>{createdTask}</p>
        </div>
        <div className={styles.taskHeaderCompleted}>
          <strong>Concluídas</strong>
          <p>            
            {completedTask} de {createdTask}
          </p>
        </div>
      </div>
     
      {tasks.length === 0 ? (
        <TaskBoard />
      ) : (
        tasks.map((task) => {
          return ( 
            <Task            
              isChecked ={checkedTasks.some((checkedTask) => checkedTask === task)}  
              onCheckedTask={checkedTask}
              content={task}
              onDeleteTask={deleteTask}
            />
          );
        })
      )}
      </div>
    
  );
}

export default App;
