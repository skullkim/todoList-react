import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import HeaderComponent from "./headerComponent";
import InputTodoComponent from "./InputTodoComponent";
import ToDoListComponent from "./TodoListComponent";
import styles from "./styles/App-style.module.scss";

function App() {
    const [toDoList, setToDoList] = useState([]);
    const [toDoId, setToDoId] = useState(0);
    const addToDo = (toDo) => {
        const newToDo = toDoList.concat({
            id: toDoId,
            toDo,
        });
        setToDoList(newToDo);
        setToDoId(toDoId + 1);
    }
    const deleteToDo = (key) => {
        const newToDo = toDoList.filter((toDo) => toDo.id !== key);
        setToDoList(newToDo);
    }
    return (
     <div className={styles.div}>
        <HeaderComponent/>
        <InputTodoComponent addToDo={addToDo}/>
        <ToDoListComponent toDoList={toDoList} deleteToDo={deleteToDo}/>
     </div>
  );
}

export default App;
