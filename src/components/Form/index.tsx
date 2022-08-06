import styles from "./styles.module.css";

import plus from "../../assets/imgs/plus.svg";
import { useTask } from "../../hooks/useTask";
import { FormEvent, HtmlHTMLAttributes, useState } from "react";

export const Form = () => {
  const [title, setTitle] = useState("");

  const { tasks, addTask } = useTask();

  const handleSubmit = (e: FormEvent<HTMLElement>) => {
    e.preventDefault();

    const id = tasks.length + 1;

    addTask(title, id);
    setTitle("");
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>
        Criar
        <img src={plus} alt="plus" />
      </button>
    </form>
  );
};
