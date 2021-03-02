import React from 'react'
import { Encabezado } from '../../ui/Encabezado';

import { CapturaTiempoExtramModal } from '../modals/CapturaTiempoExtramModal';


export const CapturaTiempoExtraScreen = () => {
    return (
        <>
            <Encabezado titulo = "Captura de tiempo extra" />
            
            
            <div className="row textos__separador30" >
                <div className="col-md-2">
                    <input type="text" name="te_empleado" autoComplete="false" className="form-control" />
                </div>
                <div className="col-md-2">
                <button type="button" className="btn btn-info">Buscar</button>
                </div>
                <div className="col-md-8">
                
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
                            <th scope="col">Dobles</th>
                            <th scope="col">Triples</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">71</th>
                            <td>Jesus Fernandez</td>
                            <td>9</td>
                            <td>3</td>
                            </tr>
                            <tr>
                            <th scope="row">45</th>
                            <td>Juan Marquez</td>
                            <td>3</td>
                            <td>0</td>
                            </tr>
                            <tr>
                            <th scope="row">100</th>
                            <td>Llia Gamez</td>
                            <td>6</td>
                            <td>0</td>
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
                            <td>03/01/2021</td>
                            <td>Pendiente</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <CapturaTiempoExtramModal />
        </>
    )
}
