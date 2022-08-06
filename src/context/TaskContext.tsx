import { createContext, useEffect, useState } from "react";

export interface ITask {
  id: number;
  title: string;
  isCompleted: boolean;
}

interface ITaskContext {
  tasks: ITask[];
  addTask: (titleTask: string, id: number) => void;
  removeTask: (id: number) => void;
  taskCompleted: (id: number) => void;
}

export const TaskContext = createContext({} as ITaskContext);

export const TaskProvider = ({ children }: { children: JSX.Element }) => {
  const [tasks, setTasks] = useState<ITask[]>([]);

  const getTasksSaved = () => {
    const tasksSaved = localStorage.getItem("tasks");
    if (tasksSaved) {
      setTasks(JSON.parse(tasksSaved));
    }
  };

  useEffect(() => {
    getTasksSaved();
  }, []);

  const setTasksAndSave = (newTasks: ITask[]) => {
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const addTask = (taskTitle: string, id: number) => {
    if (!taskTitle) return;

    const task = {
      id,
      title: taskTitle,
      isCompleted: false,
    };
    setTasksAndSave([...tasks, task]);
  };

  const removeTask = (id: number) => {
    setTasksAndSave(tasks.filter((task) => task.id !== id));
  };

  const taskCompleted = (id: number) => {
    setTasksAndSave(
      tasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, removeTask, taskCompleted }}>
      {children}
    </TaskContext.Provider>
  );
};
