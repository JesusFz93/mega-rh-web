import React, { useEffect, useRef, useState } from 'react'
import { Encabezado } from '../../ui/Encabezado';
import { TiempoExtraModal } from '../modals/TiempoExtraModal';
import {useFormulario} from '../../hooks/useForm';
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import { appStartGetInsert, startDeletingElements, appInsert, appStartGetElementsAction, appStartGetElementAction, appStartUpdateListaAction, appStartDeleteElementAction, appStartInsertListaAction} from '../../actions/dbActions';



export const CapturaTiempoExtraScreen = () => {

    const {elementos} = useSelector(state => state.dbReducer)
    const dispatch = useDispatch();
    const [ element, setElement ] = useState({});
    const [ formValues, handleInputChange, reset ] = useFormulario({te_empleado: '', solicitadas:''});
    const { te_empleado, solicitadas } = formValues;
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

            dispatch(appStartGetInsert(cuerpoPeticion, locals, solicitadas));
            
            

            
            reset();
        }
      }

      const deleteElement = (idDelete) => {

        dispatch(startDeletingElements(idDelete, locals));
      }

      useEffect(() => {
        setElement(JSON.parse(localStorage.getItem("lista")));
      }, [elementos])

      useEffect(() => {
        te_empleado_ref.current.focus();

        let d = new Date();
        let n = d.getDay();
        console.log(n);
        
        
      }, [])
      
    // [{"id":"000071", "value":"JESUS BALTAZAR FERNANDEZ PALLARES"}]

    const renderEmpleados = (emp, index) => {
        return(
            <tr key={index}>
                <th>{emp.EMPLEADO}</th>
                <th>{emp.NOMBRE}</th>
                <th>{emp.DOBLES}</th>
                <th>{emp.TRIPLES}</th>
                <th>{emp.SOLICITADAS}</th>
                <th>{emp.OCUPACION}</th>
                <th>{emp.CIUDAD}</th>
                <th><button type="button" className="btn btn-danger" onClick={() => deleteElement(index)}>X</button></th>
            </tr>
            
        )
    }

    return (
        <>
            <Encabezado titulo = "Captura de tiempo extra" />

            
            <div className="row textos__separador15" >
                <div className="col-md-3">
                    <input type="text" name="solicitadas" autoComplete="false" className="form-control" value={ solicitadas } onChange={ handleInputChange } placeholder="Captura el numero de empleado" autoComplete="off" />
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-7">
                
                </div>
            </div>
            <div className="row textos__separador30" >
                <div className="col-md-3">
                    <input type="text" name="te_empleado" autoComplete="false" className="form-control" value={ te_empleado } onChange={ handleInputChange } onKeyDown={handleKeyDown} placeholder="Captura el numero de empleado" ref={te_empleado_ref} autoComplete="off" />
                </div>
                <div className="col-md-2">
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
                            <th scope="col">ops</th>
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
