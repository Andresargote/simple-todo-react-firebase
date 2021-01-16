import React from 'react';

import '../styles/FormTodo.css';

export const FormTodo = () => {
    return (
        <div className="form-todo">
            <input type="text" placeholder="Write a todo"/>
            <button className="btn">Add new todo</button>
        </div>
    )
}
