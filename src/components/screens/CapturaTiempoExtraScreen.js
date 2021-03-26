import React, { useEffect, useRef, useState } from 'react'
import { Encabezado } from '../../ui/Encabezado';
import { TiempoExtraModal } from '../modals/TiempoExtraModal';
import Swal from 'sweetalert2';

import { useDispatch, useSelector } from 'react-redux';
import { appStartGetInsert, startDeletingElements, startDeletingLista, appStartInsertLista,appStartInsertCandidatos} from '../../actions/dbActions';

import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import nyan from '../../images/nyan-cat.gif'

const schema = yup.object().shape({
    nombre: yup.string().required("Se requiere el nombre").min(3),
    select: yup.number().min(4).max(6).required()
});

export const CapturaTiempoExtraScreen = () => {

    

    const {register, handleSubmit, setValue, errors, reset } =  useForm({});

    const {elementos} = useSelector(state => state.dbReducer)
    const dispatch = useDispatch();
    const [ element, setElement ] = useState({});
    const te_empleado_ref = useRef();

    

    const cuerpoPeticion = {
        "EMPLEADO":"",
        "DEP_DESCR":localStorage.getItem("depto"),
        "HRAS_SOLICITADAS":""
    }

    let locals = [];

    if (JSON.parse(localStorage.getItem("lista")) != null) {
        locals = JSON.parse(localStorage.getItem("lista"));
    }

    const onSubmitHandle = (data) => {
        cuerpoPeticion.EMPLEADO = data.te_empleado.padStart(6,"0");
        cuerpoPeticion.HRAS_SOLICITADAS = (Math.round(data.solicitadas * 100) / 100).toFixed(2); 
        locals = JSON.parse(localStorage.getItem("lista"));

        dispatch(appStartGetInsert(cuerpoPeticion, locals, cuerpoPeticion.HRAS_SOLICITADAS));

        setValue("te_empleado","")
        te_empleado_ref.current.focus()
    }

      const deleteElement = (idDelete) => {

        dispatch(startDeletingElements(idDelete, locals));
      }

      const deleteLista = () => {
        
/*
        Swal.fire({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: '3em',
            background: '#fff url(/images/trees.png)',
            backdrop: `
              rgba(0,0,123,0.4)
              url(${nyan})
              left top
              no-repeat
            `
          })
*/
          Swal.fire({
            title: 'Seguro?',
            text: "No se podra revertir esta accion!",
            icon: 'warning',
            showCancelButton: true,
            cancelButtonColor: '#28a745',
            confirmButtonColor: '#dc3545',
            confirmButtonText: 'Eliminar registros!',
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(startDeletingLista())

                Swal.fire({
                    title: 'Eliminado!',
                    text: "Los registros han sido eliminados.",
                    icon: 'success',
                    timer: 1000,
                    showConfirmButton: false
                })
            }
          });
          te_empleado_ref.current.focus()
      }

      const agregarLista = () => {
        setElement(JSON.parse(localStorage.getItem("lista")));


          Swal.fire({
            title: 'Nombre de la lista',
            input: 'text',
            inputAttributes: {
              autocapitalize: 'on',
            },
            showCancelButton: true,
            confirmButtonText: 'Crear',
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading(),
            reverseButtons: true
          }).then((result) => {
            if (result.isConfirmed && result.value != "") {
                dispatch(appStartInsertLista(element, result.value));
                dispatch(appStartInsertCandidatos(result.value));
                te_empleado_ref.current.focus()
            }
            else {
                Swal.fire({
                    title: `Debes de ponerle un nombre a la lista`
                  })
            }
          })

      }

      useEffect(() => {
        setElement(JSON.parse(localStorage.getItem("lista")));
      }, [elementos])

      useEffect(() => {
        te_empleado_ref.current.focus()

        let d = new Date();
        let n = d.getDay();

        const dias_semana = [1,2,3,4,5];

        if(dias_semana.includes(n))
        {
            setValue("solicitadas","3.00")
        }
        else
        {
            setValue("solicitadas","9.00")
        }

        
      }, [])
      

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
            <form onSubmit={handleSubmit(onSubmitHandle)}>
                
            <div className="row textos__separador15" >
                <div className="col-md-3">
                    <input type="text" name="solicitadas" autoComplete="false" className="form-control" placeholder="Captura el tiempo extra" autoComplete="off" ref={register} />
                </div>
                <div className="col-md-2">
                </div>
                <div className="col-md-7">
                
                </div>
            </div>
            <div className="row textos__separador30" >
                <div className="col-md-3">
                    <input type="text" name="te_empleado" autoComplete="false" className="form-control" autoComplete="off" placeholder="Captura el numero de empleado" ref={(e) => {
                        register(e)
                        te_empleado_ref.current = e // you can still assign to ref
                    }}  />
                </div>
                <div className="col-md-2">
                    <input type="submit" name="click" value="Agregar" className="btn btn-success" />
                </div>
                <div className="col-md-7">
                
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <h3>Empleados</h3>
                    <input type="button" name="click" value="Eliminar" className="btn btn-danger" onClick={deleteLista} />
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
                            {locals.map(renderEmpleados).sort((a, b) => (a.key > b.key) ? 1 : -1)}
                        </tbody>
                    </table>
                    
                </div>
            </div>
            <div className="row textos__separador15">
                <div className="col-md-1 offset-md-11">
                <input type="button" name="click" value="Crear lista" className="btn btn-success" onClick={agregarLista} />
                </div>
            </div>
            { /* <TiempoExtraModal /> */}
            </form>
        </>
    )
}
