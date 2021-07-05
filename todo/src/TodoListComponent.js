import React, {useState, useEffect} from 'react';
import styled, {css, createGlobalStyle} from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCalendarTimes} from '@fortawesome/free-solid-svg-icons';
import {MdCheckBoxOutlineBlank, MdCheckBox} from 'react-icons/md'
import styles from './styles/App-style.module.scss';

const ListBox = styled.div `
    width: 500px;
    height: 300px;
    background-color: white;
    overflow: scroll;
`;

const List = styled.span `
    margin-left: 5px;
    ${(props) =>
        props.checked && 
        css `
          color: #797878;
          text-decoration: line-through;
        `    
    }
`;

const Div = styled.div`
    display: flex;
`;

const ToDoBox = styled.div`
    width: 500px;
    height: 50px;
    border-top: lightgray solid 2px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const DeleteIcon = styled(FontAwesomeIcon)`
    margin-right: 20px;
`;

const ToDoListComponent = ({toDoList, deleteToDo, checkToDo}) => {
    const [currToDo, setCurrTodo] = useState();
    const handleClick = (key) => {
        deleteToDo(key);
    }
    useEffect(() => {
        const toDo = toDoList.map((schedule) => {
            return (<ToDoBox key={schedule.id}>
                        <Div>
                            {schedule.checked ?
                                <MdCheckBox className={styles.listCommonStyle} onClick={() => checkToDo(schedule.id)}/> :
                                <MdCheckBoxOutlineBlank className={styles.listCommonStyle} onClick={() => checkToDo(schedule.id)}/>
                            }
                            <List checked={schedule.checked}>{schedule.toDo}</List>
                        </Div>
                        <DeleteIcon icon={faCalendarTimes} className={styles.listCommonStyle} onClick={(e) => {handleClick(schedule.id)}}/>
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