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
    const [checked, setChecked] = useState(false);
    const addToDo = (toDo) => {
        const newToDo = toDoList.concat({
            id: toDoId,
            toDo,
            checked,
        });
        setToDoList(newToDo);
        setToDoId(toDoId + 1);
        setChecked(false);
    }
    const deleteToDo = (key) => {
        const newToDo = toDoList.filter((toDo) => toDo.id !== key);
        setToDoList(newToDo);
    }
    const checkToDo = (key) => {
        console.log(key);
        const newToDo = toDoList.map((toDo) => {
            return key === toDo.id ? ({...toDo, checked: !toDo.checked}) : toDo;
        });
        setToDoList(newToDo);
    }
    return (
     <div className={styles.div}>
        <HeaderComponent/>
        <InputTodoComponent addToDo={addToDo}/>
        <ToDoListComponent toDoList={toDoList} deleteToDo={deleteToDo} checkToDo={checkToDo}/>
     </div>
  );
}

export default App;
