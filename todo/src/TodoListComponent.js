import React, {useState, useEffect} from 'react';
import styled from 'styled-components';

const ListBox = styled.div `
    width: 500px;
    height: 300px;
    background-color: white;
    overflow: scroll;
`;

const ToDoListComponent = ({toDoList}) => {
    const [currToDo, setCurrTodo] = useState();
    useEffect(() => {
        const toDo = toDoList.map((schedule) => {
            return <div key={schedule.id}>{schedule.toDo}</div>
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