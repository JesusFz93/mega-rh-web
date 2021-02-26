/* Reducer para controles normales */

import { types } from '../types/types';

const initialState = {
    saludo: 'Hola que hace',
    lista: [
                {id:5, value:'asdasd'}, {id:6, value:'sdsd56'}
           ]
};

export const appReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.appGetLista:
            return {
                ...state
            }
            
        case types.appInsertLista:
            return {
                ...state,
                lista: [action.payload, ...state.lista]
            }

        case types.appDeleteLista:
            return {
                ...state,
                lista: state.lista.filter( note => note.id !== action.payload )
            }
            
        case types.appUpdateLista:
            return {
                ...state,
                lista: state.lista.map(
                    e => ( e.id === action.payload.id ) ? action.payload : e
                )
            }

        default:
            return state;
    }


}
