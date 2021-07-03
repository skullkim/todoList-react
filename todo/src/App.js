import logo from './logo.svg';
import './App.css';
import HeaderComponent from "./headerComponent";
import InputTodoComponent from "./InputTodoComponent";
import ToDoListComponent from "./TodoListComponent";
import styles from "./styles/App-style.module.scss";

function App() {
  return (
   <div className={styles.div}>
        <HeaderComponent/>
        <InputTodoComponent/>
        <ToDoListComponent/>
   </div>
  );
}

export default App;
