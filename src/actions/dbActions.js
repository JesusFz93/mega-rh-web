/* Actions para controles normales */

import { types } from "../types/types";
import { fetchSinToken } from '../helpers/fetch';
import Swal from "sweetalert2";

let empleados = [];
export const appStartGetInsert = ( param1 ) => {
    return async( dispatch ) => {

        try {

            
            const resp = await fetchSinToken('VISTA_PYEM_TE_VALIDACION',param1,'POST');
            const body = await resp.json();

            if (body.ok) {
                dispatch(appGetInsert(body.elements));
                
                let empleado = {
                    id: body.elements[0].EMPLEADO, 
                    value: body.elements[0].NOMBRE
                };

                
                empleados.push(empleado);
               // empleados.push(empleado);


                localStorage.setItem('lista', JSON.stringify(empleados));

                /*
                Swal.fire({
                    icon: 'success',
                    title: body.msj,
                    showConfirmButton: false,
                    timer: 1000
                  })
                  */

            } else {
                
                if (resp.status === 500) {
                    Swal.fire('Error ' + resp.status, body.msj, 'error');
                } else {
                    Swal.fire('Error ' + resp.status, body.msj, 'error');
            }
        }
            
        } catch (error) {
            console.log(error.Message);
        }
    }
}

const appGetInsert = (elements) => ({
    type: types.appInsertElement,
    payload: elements
});

export const appStartInsertObject = ( param1 ) => {
    return async( dispatch ) => {

           await dispatch(appInsertObject(param1));
    }
}

const appInsertObject = (objeto) => ({
    type: types.appInsertObject,
    payload: objeto
});

export const appGetObject = () => ({
    type: types.appGetObject
});

export const appStartGetElementsAction = ( ) => {
    return async( dispatch ) => {

        try {
    
            const resp = await fetchSinToken('TEST_SERIALES',{},'GET');
            const body = await resp.json();

            if (body.ok) {
                dispatch( appGetElementsAction( body.elements ) );

                Swal.fire({
                    icon: 'success',
                    title: body.msj,
                    showConfirmButton: false,
                    timer: 1000
                  })

            } else {
                
                if (resp.status === 404) {
                    Swal.fire('Error ' + resp.status, body.msj, 'error');
                } else {
                    Swal.fire('Error ' + resp.status, body.Message, 'error');
            }
        }
            
        } catch (error) {
            // Swal.fire('Error', error.msg, 'error');
            console.log(error.Message);
        }
    }
}

const appGetElementsAction = (elements) => ({
    type: types.appGetElements,
    payload: elements
});


export const appStartGetElementAction = ( param1 ) => {
    return async( dispatch ) => {

        try {
    
            const resp = await fetchSinToken(`TEST_SERIALES/${param1}`,{},'GET');
            const body = await resp.json();

            if (body.ok) {
                dispatch( appGetElementAction( body.elements ) );

            } else {
                
                if (resp.status === 404) {
                    Swal.fire('Error ' + resp.status, body.msj, 'error');
                } else {
                    Swal.fire('Error ' + resp.status, body.Message, 'error');
            }
        }
            
        } catch (error) {
            // Swal.fire('Error', error.msg, 'error');
            console.log(error.Message);
        }

    }
}

const appGetElementAction = (elements) => ({
    type: types.appGetElement,
    payload: elements
});


export const appStartInsertListaAction = ( param1 ) => {
    return async( dispatch ) => {

        try {
    
            const resp = await fetchSinToken('TEST_SERIALES',param1,'POST');
            const body = await resp.json();

            if (body.ok) {
                dispatch(appInsertElementsAction(body.elements));

                Swal.fire({
                    icon: 'success',
                    title: body.msj,
                    showConfirmButton: false,
                    timer: 1000
                  })

            } else {
                
                if (resp.status === 500) {
                    Swal.fire('Error ' + resp.status, body.msj, 'error');
                } else {
                    Swal.fire('Error ' + resp.status, body.Message, 'error');
            }
        }
            
        } catch (error) {
            console.log(error.Message);
        }
    }
}

const appInsertElementsAction = (elements) => ({
    type: types.appInsertElement,
    payload: elements
});

export const appStartUpdateListaAction = ( param1, param2 ) => {
    return async( dispatch ) => {

        try {
    
            const resp = await fetchSinToken(`TEST_SERIALES/${param1}`,param2,'PUT');
            const body = await resp.json();

            if (body.ok) {
                dispatch(appUpdateElementsAction(body.elements));

                Swal.fire({
                    icon: 'success',
                    title: body.msj,
                    showConfirmButton: false,
                    timer: 1000
                  })

            } else {
                
                if (resp.status === 404) {
                    Swal.fire('Error ' + resp.status, body.msj, 'error');
                } else {
                    Swal.fire('Error ' + resp.status, body.Message, 'error');
            }
        }
            
        } catch (error) {
            // Swal.fire('Error', error.msg, 'error');
            console.log(error.Message);
        }

        
    }
}

const appUpdateElementsAction = (elements) => ({
    type: types.appUpdateElement,
    payload: elements
});

export const appStartDeleteElementAction = ( param1 ) => {
    return async( dispatch ) => {

        try {
    
            const resp = await fetchSinToken(`TEST_SERIALES/${param1}`,{},'DELETE');
            const body = await resp.json();

            if (body.ok) {
                dispatch(appDeleteElementAction(body.elements));

                Swal.fire({
                    icon: 'success',
                    title: body.msj,
                    showConfirmButton: false,
                    timer: 1000
                  })

            } else {
                
                if (resp.status === 404) {
                    Swal.fire('Error ' + resp.status, body.msj, 'error');
                } else {
                    Swal.fire('Error ' + resp.status, body.Message, 'error');
            }
        }
            
        } catch (error) {
            // Swal.fire('Error', error.msg, 'error');
            console.log(error.Message);
        }

    }
}

const appDeleteElementAction = (elements) => ({
    type: types.appDeleteElement,
    payload: elements
});





