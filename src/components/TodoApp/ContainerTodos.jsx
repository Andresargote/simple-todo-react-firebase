import React from 'react'
import { TodoItem } from './TodoItem';

import '../styles/ContainerTodos.css';

export const ContainerTodos = () => {
    return (
        <ul>
            <TodoItem/>
        </ul>
    )
}
