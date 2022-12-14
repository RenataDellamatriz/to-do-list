import styles from './Input.module.css'

export function Input() {
  return (
    <div className={styles.wrapper}>
      <input placeholder='Adicione uma nova tarefa' />
    </div>
  );
}
