import React, { useEffect, useRef } from 'react'
import { Encabezado } from '../../ui/Encabezado';
import { TiempoExtraModal } from '../modals/TiempoExtraModal';
import {useFormulario} from '../../hooks/useForm';
import Swal from 'sweetalert2';


export const CapturaTiempoExtraScreen = () => {

    const [ formValues, handleInputChange, reset ] = useFormulario({
        te_empleado: ''
    });

    const { te_empleado } = formValues;

    const te_empleado_ref = useRef();

    const handleSearch = () => {
        // El empleado excede las 9 horas
        Swal.fire({
            icon: 'warning',
            title: 'El empleado excede las 9 horas dobles',
            showConfirmButton: false,
            timer: 1500
          })
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
          console.log(te_empleado);



          reset();
        }
      }

      useEffect(() => {
            te_empleado_ref.current.focus();
      }, [])

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
                            <th scope="col">#</th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Fecha</th>
                            <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>Lista de TE 1</td>
                            <td>03/03/2021</td>
                            <td>Pendiente</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            { /* <TiempoExtraModal /> */}
            
        </>
    )
}
