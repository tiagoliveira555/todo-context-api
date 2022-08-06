import styles from "./styles.module.css";
import trash from "../../assets/imgs/trash.svg";
import checked from "../../assets/imgs/checked.svg";
import { useTask } from "../../hooks/useTask";

export const Task = () => {
  const { tasks, removeTask, taskCompleted } = useTask();

  return (
    <>
      {tasks.length > 0 &&
        tasks.map((task, index) => (
          <div key={index} className={styles.task}>
            <div onClick={() => taskCompleted(task.id)}>
              {task.isCompleted ? (
                <img className={styles.checked} src={checked} alt="checked" />
              ) : (
                <div className={styles.checker} />
              )}
            </div>

            <p className={task.isCompleted ? styles.taskCompleted : ""}>
              {task.title}
            </p>

            <button onClick={() => removeTask(task.id)}>
              <img src={trash} alt="trash" />
            </button>
          </div>
        ))}
    </>
  );
};
