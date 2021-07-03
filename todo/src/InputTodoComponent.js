import React, {useState} from 'react';
import styled from 'styled-components';
import {placeholder} from "@babel/types";

const InputTodo = styled.input`
    color: lightgray;
    background-color: black;
    width: 450px;
    height: 40px;
`;

const AddTodo = styled.button`
    background-color: gray;
    color: white;
    width: 40px;
    height: 46px;
`;

const InputTodoComponent = () => {
    const [todo, setTodo] = useState('');
    const handleChange = (event) => {
        setTodo(event.target.value);
    }
    return (
        <div>
            <InputTodo type="text"
                       placeholder={"Input your schedule"}
                       onChange={handleChange}
            />
            <AddTodo>+</AddTodo>
        </div>
    );

}

export default InputTodoComponent;