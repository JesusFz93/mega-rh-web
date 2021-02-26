import { fetchSinToken, fetchConToken } from '../helpers/fetch';
import { types } from '../types/types';
import Swal from 'sweetalert2';
import { eventLogout } from './events';

import { startLoading, finishLoading } from './ui';



export const startLoginEmailPassword = (param1) => {
    return async (dispatch) => {

        dispatch( startLoading() );


        const resp = await fetchSinToken('VISTA_RELACION_USUARIOS_OHR',param1,'POST');
            const body = await resp.json();

            if (body.ok) {
                // dispatch(appInsertUsuarioAction(body.elements));

                 localStorage.setItem('token', body.token );
                 localStorage.setItem('token-init-date', new Date().getTime() );
                 localStorage.setItem('id', body.elements[0].Id );
                 localStorage.setItem('user_id', body.elements[0].USER_ID );

                 dispatch(login( body.elements[0].Id, body.elements[0].USER_ID ));

                 dispatch( finishLoading() );
/*
                Swal.fire({
                    icon: 'success',
                    title: body.msj,
                    showConfirmButton: false,
                    timer: 1000
                  })
                  */

            } else {
                
                dispatch( finishLoading() );
                console.log(body);

                Swal.fire('Error ' + resp.status, body.msj, 'error');
        }
        
        /*
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {
                dispatch(login( user.uid, user.displayName ));

                dispatch( finishLoading() );
            })
            .catch( e => {
                console.log(e);
                dispatch( finishLoading() );
                Swal.fire('Error', e.message, 'error');
            })
*/
        
        
    }
}

const appInsertUsuarioAction = (elements) => ({
    type: types.appInsertUsuario,
    payload: elements
});


export const startLogin = ( email, password ) => {
    return async( dispatch ) => {

        const resp = await fetchSinToken( 'auth', { email, password }, 'POST' );
        const body = await resp.json();

        if( body.ok ) {
            localStorage.setItem('token', body.token );
            localStorage.setItem('token-init-date', new Date().getTime() );
            localStorage.setItem('id', body.uid );

            dispatch( login({
                uid: body.uid,
                name: body.name
            }) )
        } else {
            Swal.fire('Error', body.msg, 'error');
        }
        




        
    }
}

export const login = ( uid, displayName ) => ({
    type: types.authLogin,
    payload: {
        uid,
        displayName
    }
});


export const startLogout = () => {
    return ( dispatch ) => {

        // dispatch( eventLogout() );
        dispatch( logout() );
        localStorage.clear();
    }
}



const logout = () => ({ type: types.authLogout })