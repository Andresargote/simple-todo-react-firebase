import React from 'react';
import useGreeting from '@trndd/time-greeting';
//import {useSelector} from 'react-redux';

import '../styles/HeaderTodo.css';

export const HeaderTodo = () => {

    //const state = useSelector(state => state.auth);//aqui accedemos al store y buscamo el name del usuario
    const {greeting} = useGreeting({});

    return (
        <header>
            <h3>{greeting}</h3>
            <h1>Andres</h1>
        </header>
    )
}
