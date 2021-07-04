import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarTimes} from '@fortawesome/free-solid-svg-icons';

const ListBox = styled.div `
    width: 500px;
    height: 300px;
    background-color: white;
    overflow: scroll;
`;

const ToDoBox = styled.div`
    width: 500px;
    height: 50px;
    border: lightgray solid 2px;
`;

const ToDoListComponent = ({toDoList, deleteToDo}) => {
    const [currToDo, setCurrTodo] = useState();
    const handleClick = (key) => {
        deleteToDo(key);
    }
    useEffect(() => {
        const toDo = toDoList.map((schedule) => {
            return (<ToDoBox key={schedule.id}>
                        {schedule.toDo}
                        <FontAwesomeIcon icon={faCalendarTimes} onClick={(e) => {handleClick(schedule.id)}}/>
                    </ToDoBox>);
        });
        console.log(toDo);
        setCurrTodo(toDo);
    }, [toDoList]);
    return(
        <ListBox>
            {currToDo}
        </ListBox>
     );
}

export default ToDoListComponent;