import { useTask } from "../../hooks/useTask";
import styles from "./styles.module.css";

export const Info = () => {
  const { tasks } = useTask();

  return (
    <div className={styles.info}>
      <div className={styles.created}>
        <p>Tarefas criadas</p>
        <span>{tasks.length}</span>
      </div>
      <div className={styles.ended}>
        <p>Concluídas</p>
        <span>
          {tasks.filter((task) => task.isCompleted).length} de {tasks.length}
        </span>
      </div>
    </div>
  );
};
