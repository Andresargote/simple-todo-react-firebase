import React from 'react'

import { HeaderTodo } from './HeaderTodo';
import { FormTodo } from './FormTodo';
import { ContainerTodos } from './ContainerTodos';

export const TodoScreen = () => {
    return (
        <div>
            <HeaderTodo/>
            <FormTodo/>
            <ContainerTodos/>
        </div>
    )
}
