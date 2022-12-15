import { CheckboxInput } from "./CheckboxInput";
import styles from "./Task.module.css";
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";

interface TaskProps {
  content:string;
  onDeleteTask: (task:string) => void;
}

export function Task({content,onDeleteTask} : TaskProps) {
  

  function handleDeleteTask(){
    onDeleteTask(content)
  }
  
  return (
    <div className={styles.wrapper}>
      <div className={styles.chechboxLabel}>
      <CheckboxInput />
      
      <p>
        {content} 
      </p>
      </div>

      <button className={styles.trashButton} onClick={handleDeleteTask} title='Deletar comentário'>
      <HiOutlineTrash
        className={styles.trash}
      />
      </button>
      
    </div>
  );
}
