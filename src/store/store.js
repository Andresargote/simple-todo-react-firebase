import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { uiReducer } from '../reducers/uiReducer';
import { todosReducers } from '../reducers/todosReducers';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({//combinar reducers
    auth: authReducer,
    ui: uiReducer,
    todos: todosReducers
});

export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    ),
    
);//el create store solo recibe un reducer