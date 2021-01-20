import React from 'react'
import { TodoItem } from './TodoItem';

import '../styles/ContainerTodos.css';
import { useSelector } from 'react-redux';

export const ContainerTodos = () => {

    const {todos} = useSelector(state => state.todos);

    console.log(todos);

    return (
        <ul>
            {
                todos.map(todo => {
                    return <TodoItem key={todo.id} {...todo} />
                })
            }
        </ul>
    )
}
