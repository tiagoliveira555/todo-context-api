import { Form } from "./components/Form";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Task } from "./components/Task";

import styles from "./App.module.css";

const App = () => {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <Form />
        <Info />
        <Task />
      </div>
    </>
  );
};

export default App;
