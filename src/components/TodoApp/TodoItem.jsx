import React from 'react';

import '../styles/TodoItem.css';

export const TodoItem = ({id, titleTodo, completeTodo}) => {

    return (
        <li>
            <div className="list">
                <div className="list-check-todo">
                    <label className="b-contain">
	                    <input type="checkbox" />
	                    <div className="b-input"></div>
                    </label>
                    <span>{titleTodo}</span>
                    <span>HOla</span>
                </div>
                <span>X</span>
            </div>
        </li>
    )
}
