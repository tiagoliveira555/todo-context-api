import styles from "./styles.module.css";
import logo from "../../assets/imgs/Logo.svg";

export const Header = () => {
  return (
    <header className={styles.header}>
      <img src={logo} alt="Logo" />
    </header>
  );
};
