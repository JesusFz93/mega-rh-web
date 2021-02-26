import { types } from '../types/types';


export const startLoadingElements = ( uid ) => {
    return async( dispatch, getState ) => {

        
        console.log("Hola");

    }
}


export const setElements = ( elements ) => ({
    type: types.pageLoadElements,
    payload: elements
});



export const startNewElements = ( param1, param2 ) => {
    return async( dispatch, getState ) => {

        

        try {
            console.log("Todo bien");
            
        } catch (error) {
            console.log(error);
        }


    }
}

export const addNewElements = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})

export const startDeletingElements = ( id ) => {
    return async( dispatch, getState ) => {
         
        

    }
}

export const deleteElement = (id) => ({
    type: types.pageDeleteElements,
    payload: id
});