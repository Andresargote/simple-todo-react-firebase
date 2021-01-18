import {types} from '../types/types';

const initialState = {
    todos: [],
    active: null,
}

export const todosReducers = (state = initialState, action) => {
    switch(action.type) {
        case types.todosActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        
        default:
            return state;
    }
}