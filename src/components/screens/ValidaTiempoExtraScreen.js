/*
import React, { useState } from 'react'
import { Encabezado } from '../../ui/Encabezado'

export const ValidaTiempoExtraScreen = () => {
    return (
        <>
            <Encabezado titulo= "Validacion de listas de tiempo extra"  />
            
            
        </>
    )
}
*/

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useFormulario } from '../../hooks/useForm';
import {appStartGetElementsAction, appStartGetElementAction, appStartUpdateListaAction, appStartDeleteElementAction, appStartInsertListaAction} from '../../actions/dbActions';

export const ValidaTiempoExtraScreen = () => {

    const {elementos} = useSelector(state => state.dbReducer)
    const dispatch = useDispatch()

    const [ formLoginValues, handleLoginInputChange ] = useFormulario({
        idelemento: '',
        idencabezado: '',
        idcontenido: ''
    });
    

    const {idelemento, idencabezado, idcontenido } = formLoginValues;

    const handleSubmit = ( e ) => {
        e.preventDefault();
       
    }

    const onClickUnoGET = () => {
        dispatch(appStartGetElementAction(parseInt(idelemento)));

        elementos.map( element => (
            formLoginValues.idencabezado = element.num_parte,
            formLoginValues.idcontenido = element.serial
            
        ));

      //  setEstado({});
    }

    const [textState, setTextState] = useState({idtext:'asdgsddgsgd', ldtext:'dasdgf'});
    const [state, setState] = useState({});


    const onClick=(e) => {
        console.log(e);
        textState.idtext= 'poto';
        setState(textState.idtext = 'assdasdasdasd');
      }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleSubmit }>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="id elemento"
                                name="idelemento"
                                value={ idelemento }
                                onChange={ handleLoginInputChange }
                                autoComplete = 'off'
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                className="form-control"
                                placeholder="id encabezado"
                                name="idencabezado"
                                value={ idencabezado }
                                onChange={ handleLoginInputChange }
                                autoComplete = 'off'
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="id contenido"
                                name="idcontenido"
                                value={ idcontenido }
                                onChange={ handleLoginInputChange }
                                autoComplete = 'off'
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="submit"
                                className="btn btn-success"
                                value="Login" 
                            />
                            <input 
                                type="button"
                                className="btn btn-info"
                                value="Set new values" 
                                onClick={onClick}
                            />
                            <input 
                                type="button"
                                className="btn btn-primary"
                                value="Obtener un elemento" 
                                onClick={onClickUnoGET}
                            />
                        </div>
                    </form>
                </div>
                <div className="col-md-6">
                    <ul className='mt-3'>
                        {
                                        
                            elementos.map( element => (
                                <li key={ element.rowid }
                                { ...element }>{element.rowid} - {element.num_parte} - {element.serial} - {element.status }</li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            <div className = "row">
                <input type = "text" className="form-control" placeholder="id contenido" name="idtext" value={ textState.idtext } onChange={ e => setTextState({...textState, idtext: e.target.value}) } autoComplete = 'off' /><br />
                <input type = "text" className="form-control" placeholder="id contenido" name="ldtext" value={ textState.ldtext } onChange={ e => setTextState({...textState, ldtext: e.target.value}) } autoComplete = 'off' /><br />
                <input type = "text" className="form-control" placeholder="id contenido" name="ldtext" value={ state.btext } onChange={ setState } autoComplete = 'off' />

                <h2>{textState.idtext}</h2><br /><br />
                <h2>{textState.ldtext}</h2>

            </div>
        </div>
    )
}




