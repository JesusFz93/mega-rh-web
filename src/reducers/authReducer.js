import { types } from '../types/types';

const initialState = {
};
/*
    {
        uid: 'jagdfjahdsf127362718',
        name: 'Fernando'
    }

*/
export const authReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.appInsertUsuario:
            return {
                ...state,
                usuario: [...action.payload]
            }

        case types.authLogin:
            return {
                uid: action.payload.uid,
                name: action.payload.displayName
            }

        case types.authLogout:
                return { }
    
        default:
            return state;
    }

}