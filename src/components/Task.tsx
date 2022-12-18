import { CheckboxInput } from "./CheckboxInput";
import styles from "./Task.module.css";
import { HiOutlineTrash } from "react-icons/hi";
import { useState } from "react";

interface TaskProps {
  checked?: boolean;
  content: string;
  onDeleteTask: (task: string) => void;
  onCheckedTask: (task: string, checked: boolean) => void;
  isChecked:boolean;
}

export function Task({
  isChecked,
  content,
  onDeleteTask,
  onCheckedTask,
  checked,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(content);
  }

  function handleCheckedTask(checked: boolean) {
    onCheckedTask(content, checked);
  }

  return (
    <div className={styles.wrapper} onChange={() => onCheckedTask}>
      <div
        className={
          isChecked ? styles.chechboxLabelChecked : styles.chechboxLabel
        }
      >
        <CheckboxInput onChange={handleCheckedTask} />

        <p>{content}</p>
      </div>

      <button
        className={styles.trashButton}
        onClick={handleDeleteTask}
        title="Deletar comentário"
      >
        <HiOutlineTrash className={styles.trash} />
      </button>
    </div>
  );
}
