/* Reducer para controles normales */

import { types } from '../types/types';

const initialState = {
    elementos: [

    ],
    objetos: [
        {id:"rd71", value:"jesus"},
        {id:"rd111", value:"andy"},
        {id:"rd197", value:"mario"}
    ],
    objetosSalida: [

    ]
};

export const dbReducer = ( state = initialState, action ) => {

    switch ( action.type ) {

        case types.appInsertObject:
            return {
                ...state,
                objetos: [action.payload,...state.objetos]
            }

        case types.appGetObject:
            return {
                ...state
            }

        case types.appGetElements:
            return {
                ...state,
                elementos: [...action.payload]
            }

        case types.appGetElement:
            return {
                ...state,
                elementos: [action.payload]
            }
            
        case types.appInsertElement:
            return {
                ...state,
                elementos: [...action.payload]
            }
        
        case types.appInsert:
            return {
                ...state,
                elementos: [action.payload]
            }
            
        case types.appUpdateElement:
            return {
                ...state,
                elementos: [action.payload]
            }

        case types.appDeleteElement:
            return {
                ...state,
                elementos: [...action.payload]
            }

        default:
            return state;
    }


}
