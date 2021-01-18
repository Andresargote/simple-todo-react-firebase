import React from 'react';
import { useDispatch } from 'react-redux';

import {startNewTodo} from '../../actions/todos';

import '../styles/FormTodo.css';

export const FormTodo = () => {

    const dispatch = useDispatch();

    const handleAddNewTodo = () => {
        dispatch(startNewTodo());
    }

    return (
        <div className="form-todo">
            <input type="text" placeholder="Write a todo"/>
            <button className="btn" onClick={handleAddNewTodo}>Add new todo</button>
        </div>
    )
}
