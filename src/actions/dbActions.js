/* Actions para controles normales */

import { types } from "../types/types";
import { fetchSinToken } from '../helpers/fetch';
import Swal from "sweetalert2";

export const appStartGetInsert = ( param1, param2, solicitadas ) => {
    return async( dispatch ) => {
/*
        try {*/

            
            const resp = await fetchSinToken('VISTA_PYEM_TE_VALIDACION_TEMP',param1,'POST');
            const body = await resp.json();

            if (body.ok) {

                console.log(body);
                dispatch(appGetInsert(body.elements));
                
                let empleado = {
                    id: body.elements[0].EMPLEADO, 
                    value: body.elements[0].NOMBRE
                };

                let emp = body.elements[0].EMPLEADO;

                

                if(!param2.find(t => t.EMPLEADO === body.elements[0].EMPLEADO)){
                    body.elements[0].SOLICITADAS = solicitadas;
                    param2.push(body.elements[0]);
                }


                
               // empleados.push(empleado);

                
                localStorage.setItem('lista', JSON.stringify(param2));

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
            /*
        } catch (error) {
            console.log(error.Message);
        }*/
    }
}

const appGetInsert = (elements) => ({
    type: types.appInsertElement,
    payload: elements
});

export const appStartInsertLista = ( lista, nombre_lista ) => {
    return async( dispatch ) => {
/*
        try {*/

            const sweeterArray = lista.map(item => {
                return {
                    FECHA: '20210326',
                    NOMBRE_LISTA: nombre_lista.toUpperCase(),
                    NUM_EMP: item.EMPLEADO, 
                    NOMBRE_EMP: item.NOMBRE, 
                    DOBLES: item.DOBLES, 
                    TRIPLES: item.TRIPLES, 
                    HORAS_EXTRAS: item.SOLICITADAS, 
                    OCUPACION: item.OCUPACION, 
                    FIRMA_EMPLEADO: 'e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855', 
                    CIUDAD: item.CIUDAD, 
                    AREA: item.DEPTO_ID, 
                    DEP_DESCR: item.DEP_DESCR, 
                    TURNO: item.TURNO, 
                    TIPO: item.TIPO

                }
            });
            
            const resp = await fetchSinToken('PYEM_TE_CAPTURA',sweeterArray,'POST');
            const body = await resp.json();
console.log(body);
            if (body.ok) {
                
                localStorage.setItem('lista', JSON.stringify([]));
                dispatch(deleteLista([]));

                Swal.fire({
                    title: 'Lista creada!',
                    text: "Los registros han sido capturados.",
                    icon: 'success',
                    timer: 1000,
                    showConfirmButton: false
                })

            } else {
                
                if (resp.status === 500) {
                    console.log(body.msj);
                    Swal.fire('Error ' + resp.status, body.msj, 'error');
                } else {
                    Swal.fire('Error ' + resp.status, body.msj, 'error');
            }
        }
            /*
        } catch (error) {
            console.log(error.Message);
        }*/
    }
}

export const appStartInsertCandidatos = ( nombre_lista ) => {
    return async( dispatch ) => {
/*
        try {*/

            const sweeterObject = {
                FECHA: '20210326',
                NOMBRE_LISTA: nombre_lista.toUpperCase(),
                JEFE_NOM: 'MARIO SANCHEZ', 
                STATUS: 'P', 
                RESPONSABLE: 'MASANCHEZ', 
                FECHA_RESPONSABLE: Date(), 
                CANT_REQUERIDA: 3
            };

            console.log(sweeterObject);
            
            const resp = await fetchSinToken('PYEM_TE_LISTAS',sweeterObject,'POST');
            const body = await resp.json();
console.log(body);
            if (body.ok) {
                localStorage.setItem('lista', JSON.stringify([]));
                dispatch(deleteLista([]));
                
            } else {
                
                if (resp.status === 500) {
                    console.log(body.msj);
                    Swal.fire('Error ' + resp.status, body.msj, 'error');
                } else {
                    Swal.fire('Error ' + resp.status, body.msj, 'error');
            }
        }
            /*
        } catch (error) {
            console.log(error.Message);
        }*/
    }
}

export const startDeletingLista = (  ) => {
    return async( dispatch ) => {
         
        console.log('eliminado');
        localStorage.setItem('lista', JSON.stringify([]));

        dispatch(deleteLista([]));

    }
}

const deleteLista = (elements) => ({
    type: types.appDeleteLista,
    payload: elements
});

export const startDeletingElements = ( id, param2 ) => {
    return async( dispatch ) => {
         
       // console.log(id, param2);
        param2.splice(id,1);
        localStorage.setItem('lista', JSON.stringify(param2));

        dispatch(appGetInsert(param2));

    }
}

export const appInsert = (elements) => ({
    type: types.appInsert,
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





