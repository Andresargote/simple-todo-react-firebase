import React from 'react';
import useGreeting from '@trndd/time-greeting';
import {useSelector} from 'react-redux';

import '../styles/HeaderTodo.css';

import {startLogout} from '../../actions/auth';
import { useDispatch } from 'react-redux';

export const HeaderTodo = () => {

    const dispatch = useDispatch();

    const {name} = useSelector(state => state.auth);//aqui accedemos al store y buscamo el name del usuario
    const {todos} = useSelector(state => state.todos);

    console.log(todos);

    const {greeting} = useGreeting({});

    const handleLogout = () => {
        dispatch(startLogout());
    }

    return (
        <header>
            <div className="title">
                <h3>{greeting}</h3>
                <h1>{name}</h1>
                <span>{(todos.length === 1) ? todos.length + " todo" : todos.length + " todos"}</span>
            </div>
            <button className="logout" onClick={handleLogout}>
                Logout
            </button>
        </header>
    )
}
