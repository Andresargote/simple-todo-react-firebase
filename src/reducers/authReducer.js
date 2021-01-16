import { types } from '../types/types';

export const authReducer = (state = {}, action) => {//es importante mandar un estado inicial al state ya que si no mandamos nada dara ERRROR

    switch(action.type) {
        case types.login: 
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }
        case types.logout: 
            return {}
        default:
            return state;
    }

}