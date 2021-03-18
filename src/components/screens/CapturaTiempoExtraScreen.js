import React, { useEffect, useRef, useState } from 'react'
import { Encabezado } from '../../ui/Encabezado';
import { TiempoExtraModal } from '../modals/TiempoExtraModal';
import {useFormulario} from '../../hooks/useForm';
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import { appStartGetInsert, appInsert, appStartGetElementsAction, appStartGetElementAction, appStartUpdateListaAction, appStartDeleteElementAction, appStartInsertListaAction} from '../../actions/dbActions';



export const CapturaTiempoExtraScreen = () => {

    const {elementos} = useSelector(state => state.dbReducer)
    const dispatch = useDispatch();
    const [ element, setElement ] = useState({});
    const [ formValues, handleInputChange, reset ] = useFormulario({te_empleado: ''});
    const { te_empleado } = formValues;
    const te_empleado_ref = useRef();

    const cuerpoPeticion = {
        "EMPLEADO":""
    }

    let locals = [];

    if (JSON.parse(localStorage.getItem("lista")) != null) {
        locals = JSON.parse(localStorage.getItem("lista"));
    }

    
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {

            cuerpoPeticion.EMPLEADO = te_empleado.padStart(6,"0");
            locals = JSON.parse(localStorage.getItem("lista"));

            console.log(locals.find(cuerpoPeticion.EMPLEADO))

            dispatch(appStartGetInsert(cuerpoPeticion, locals));
            
            

            
            reset();
        }
      }

      useEffect(() => {
        setElement(JSON.parse(localStorage.getItem("lista")));
      }, [elementos])

      useEffect(() => {
        te_empleado_ref.current.focus();
      }, [])
      
    // [{"id":"000071", "value":"JESUS BALTAZAR FERNANDEZ PALLARES"}]

    const renderEmpleados = (empelado, index) => {
        return(
            <tr key={index}>
                <th>{empelado.EMPLEADO}</th>
                <th>{empelado.NOMBRE}</th>
                <th>{empelado.DOBLES}</th>
                <th>{empelado.TRIPLES}</th>
                <th>{0}</th>
                <th>{empelado.OCUPACION}</th>
                <th>{empelado.CIUDAD}</th>
            </tr>
        )
    }

    return (
        <>
            <Encabezado titulo = "Captura de tiempo extra" />

            
            
            <div className="row textos__separador30" >
                <div className="col-md-3">
                    <input type="text" name="te_empleado" autoComplete="false" className="form-control" value={ te_empleado } onChange={ handleInputChange } onKeyDown={handleKeyDown} placeholder="Captura el numero de empleado" ref={te_empleado_ref} autoComplete="off" />
                </div>
                <div className="col-md-2">
                { /* <button type="button" className="btn btn-info" onClick={handleSearch}>Buscar</button> */}
                </div>
                <div className="col-md-7">
                
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Empleados</h3>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Dobles</th>
                            <th scope="col">Triples</th>
                            <th scope="col">Solicitadas</th>
                            <th scope="col">Razon</th>
                            <th scope="col">Riobravo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {locals.map(renderEmpleados)}
                        </tbody>
                    </table>
                </div>
            </div>
            { /* <TiempoExtraModal /> */}
            
        </>
    )
}
