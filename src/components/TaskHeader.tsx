import styles from './TaskHeader.module.css'

export function TaskHeader() {
  return (
    <div className={styles.taskHeader}>
      <div className={styles.taskHeaderCriated}>
        <strong>Tarefas Criadas</strong>
        <p>0</p>
      </div>
      <div className={styles.taskHeaderCompleted}>
        <strong>Concluídas</strong>
        <p>0</p>
      </div>
    </div>
  );
}
