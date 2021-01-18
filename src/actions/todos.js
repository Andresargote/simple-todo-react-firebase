import {db} from '../firebase/firebaseConfig';

import {types} from '../types/types';

export const startNewTodo = () => {
    return async (dispatch, getState) => {

        const {uid} = getState().auth;

        const newTodo = {
            titleTodo: "",
            completeTodo: false,
            date: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/todos/todo`).add(newTodo);

        dispatch(activeTodo(doc.id, newTodo));

    }

}

export const activeTodo = (id, todo) => {
    return {
        type: types.todosActive,
        payload: {
            id, 
            ...todo
        }
    }
}