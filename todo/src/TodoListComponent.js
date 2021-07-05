import React, {useState, useEffect} from 'react';
import styled, {css} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarTimes} from '@fortawesome/free-solid-svg-icons';
import {MdCheckBoxOutlineBlank, MdCheckBox} from 'react-icons/md'

const ListBox = styled.div `
    width: 500px;
    height: 300px;
    background-color: white;
    overflow: scroll;
`;

const List = styled.span `
    ${(props) =>
        props.checked && 
        css `
            color: lightgray;
            text-decoration: line-through;
        `    
    }
`;

const ToDoBox = styled.div`
    width: 500px;
    height: 50px;
    border: lightgray solid 2px;
    display: flex;
`;

const ToDoListComponent = ({toDoList, deleteToDo, checkToDo}) => {
    const [currToDo, setCurrTodo] = useState();
    const handleClick = (key) => {
        deleteToDo(key);
    }
    useEffect(() => {
        const toDo = toDoList.map((schedule) => {
            return (<ToDoBox key={schedule.id}>
                {schedule.checked ?
                    <MdCheckBox onClick={() => checkToDo(schedule.id)}/> :
                    <MdCheckBoxOutlineBlank onClick={() => checkToDo(schedule.id)}/>
                }
                        <List checked={schedule.checked}>{schedule.toDo}</List>
                        <FontAwesomeIcon icon={faCalendarTimes} onClick={(e) => {handleClick(schedule.id)}}/>
                    </ToDoBox>);
        });
        setCurrTodo(toDo);
    }, [toDoList]);
    return(
        <ListBox>
            {currToDo}
        </ListBox>
     );
}

export default ToDoListComponent;