import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import HeaderComponent from "./headerComponent";
import InputTodoComponent from "./InputTodoComponent";
import ToDoListComponent from "./TodoListComponent";
import styles from "./styles/App-style.module.scss";

function App() {
    const [toDoList, setToDoList] = useState([]);
    const addToDo = (toDo) => {
        const newToDo = toDoList.concat({
            id: toDoList.length,
            toDo,
        });
        setToDoList(newToDo);
    }
    return (
     <div className={styles.div}>
        <HeaderComponent/>
        <InputTodoComponent addToDo={addToDo}/>
        <ToDoListComponent toDoList={toDoList}/>
     </div>
  );
}

export default App;
