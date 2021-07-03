import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./headerComponent";
import styles from "./styles/App-style.module.scss";
import InputTodoComponent from "./InputTodoComponent";

function App() {
  return (
   <div className={styles.div}>
        <HeaderComponent/>
        <InputTodoComponent/>
   </div>
  );
}

export default App;
