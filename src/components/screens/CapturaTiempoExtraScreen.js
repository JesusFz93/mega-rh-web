import React, { useEffect, useRef, useState } from 'react'
import { Encabezado } from '../../ui/Encabezado';
import { TiempoExtraModal } from '../modals/TiempoExtraModal';
import {useFormulario} from '../../hooks/useForm';
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import { appStartGetInsert, appStartGetElementsAction, appStartGetElementAction, appStartUpdateListaAction, appStartDeleteElementAction, appStartInsertListaAction} from '../../actions/dbActions';



export const CapturaTiempoExtraScreen = () => {

    const {elementos} = useSelector(state => state.dbReducer)
    const dispatch = useDispatch();

    const [element, setElement] = useState({});

    const renderObjetos = (item, index) => {
        return(
            <li key={index}>{item.id} - {item.value}</li>
        )
    }

    const [ formValues, handleInputChange, reset ] = useFormulario({te_empleado: ''});

    const { te_empleado } = formValues;

    const te_empleado_ref = useRef();

    let content = "";

    const handleSearch = () => {
        // El empleado excede las 9 horas
        Swal.fire({
            icon: 'warning',
            title: 'El empleado excede las 9 horas dobles',
            showConfirmButton: false,
            timer: 1500
          })
    }

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
            dispatch(appStartGetInsert(cuerpoPeticion));
            
            locals = localStorage.getItem("lista");

            setElement(JSON.parse(localStorage.getItem("lista")));
/*
            setEscaneado(true);
            if(escaneado){
                cargaTabla();
            }*/
            reset();
        }
      }

    content = locals.map((post) =>
        <div key={post.id}>
        <p>{post.id} - {post.value}</p>
        </div>
    );

      const cargaTabla = () => {
        
    }

      useEffect(() => {
        te_empleado_ref.current.focus();
        
        setElement(JSON.parse(localStorage.getItem("lista")));
        
      }, [])
/*
    const players = [
        {position:"Delantero", name:"Jesus", team:"Patriots"},
        {position:"Defensa", name:"Mariano", team:"Barcelona"},
        {position:"Portero", name:"Monse", team:"Pumas"},
        {position:"Medio", name:"Lopez", team:"Madrid"}
    ]

    const renderPlayer = (player, index) => {
        return(
            <tr key={index}>
                <th>{player.position}</th>
                <th>{player.name}</th>
                <th>{player.team}</th>
            </tr>
        )
    }*/

    let empleados = [
        
    ]

    empleados = JSON.parse(localStorage.getItem("lista"));

    const renderEmpleados = (empelado, index) => {
        return(
            <tr key={index}>
                <th>{empelado.id}</th>
                <th>{empelado.value}</th>
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
                
                {element.length > 0  &&
                <ul>
                    {element.map(renderObjetos)}
                </ul>}
                </div>
            </div>
            <div className="row">
                <div className="col-md-7">
                    <h3>Empleados</h3>
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Dobles</th>
                            <th scope="col">Triples</th>
                            <th scope="col">Solicitadas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">71</th>
                            <td>Jesus Fernandez</td>
                            <td>03/03/2021</td>
                            <td>9</td>
                            <td>3</td>
                            <td>3</td>
                            </tr>
                            <tr>
                            <th scope="row">45</th>
                            <td>Juan Marquez</td>
                            <td>03/03/2021</td>
                            <td>3</td>
                            <td>0</td>
                            <td>3</td>
                            </tr>
                            <tr>
                            <th scope="row">100</th>
                            <td>Llia Gamez</td>
                            <td>03/03/2021</td>
                            <td>6</td>
                            <td>0</td>
                            <td>3</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-5">
                <h3>Listas</h3>
                <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Position</th>
                            <th scope="col">Team</th>
                            </tr>
                        </thead>
                        <tbody>
                            {empleados.map(renderEmpleados)}
                        </tbody>
                    </table>
                </div>
            </div>
            { /* <TiempoExtraModal /> */}
            
        </>
    )
}
