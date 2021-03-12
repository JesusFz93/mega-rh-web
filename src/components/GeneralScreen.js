import React, {useState, useEffect, useRef} from 'react'
import { Encabezado } from '../ui/Encabezado'
import { useFormulario } from '../hooks/useForm';

import { useDispatch, useSelector } from 'react-redux';
import { appStartInsertObject, appGetObject} from '../actions/dbActions';

export const GeneralScreen = () => {

    const [ formValues, handleInputChange, reset ] = useFormulario({te_empleado: ''});
    const { te_empleado } = formValues;

    const te_empleado_ref = useRef();

    const [element, setElement] = useState({});
    const [empleados, setEmpleados] = useState({});

    const renderObjetos = (item, index) => {
        return(
            <li key={index}>{item.id} - {item.value}</li>
        )
    }

    const {objetos} = useSelector(state => state.dbReducer)
    const dispatch = useDispatch();

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
/*
            if(element.length > 0 ){
                setElement([...element,{id:te_empleado, value: "nombre"}]);
            }else{
                setElement([{id:te_empleado, value:"nombre"}]);
            }*/

         //   setEmpleados([...empleados,{id:te_empleado, value: "nombre"}]);
        // let empleadoss = [{id:"te_empleado", value: "ss"}]
        // empleadoss.push({id:te_empleado, value: "nombre"});


        console.log(objetos);
             dispatch(appStartInsertObject({id:te_empleado, value:"nombre"}));

             console.log(objetos);
          //   dispatch(appGetObject);
             
            
            // setElement(JSON.parse(localStorage.getItem("lista")));
            


            
            reset();
        }
      }
    
      useEffect(() => {
        te_empleado_ref.current.focus();
        
        console.log(objetos);

        objetos.map(renderObjetos)
        
      }, [])

    return (
        <>
            <Encabezado titulo = "Pruebas generales" />

            <input type="text" name="te_empleado" autoComplete="false" className="form-control" value={ te_empleado } onChange={ handleInputChange } onKeyDown={handleKeyDown} placeholder="Captura el numero de empleado" autoComplete="off" ref={te_empleado_ref} />
            
            {/*
                element.length > 0  &&
                <ul>
                    {element.map(renderObjetos)}
                </ul>
                */

                objetos.length > 0  &&
                <ul>
                    {objetos.map(renderObjetos)}
                </ul>
            }
            
            
            
        </>
    )
}
