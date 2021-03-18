import React, {useState, useEffect, useRef} from 'react'
import { Encabezado } from '../ui/Encabezado'
import { useFormulario } from '../hooks/useForm';

import { useDispatch, useSelector } from 'react-redux';
import { appStartInsertObject, appGetObject} from '../actions/dbActions';

export const GeneralScreen = () => {

    /* borrar */
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({});


    /* borrar */

    const [ formValues, handleInputChange, reset ] = useFormulario({te_empleado: ''});
    const { te_empleado } = formValues;

    const te_empleado_ref = useRef();

    const [element, setElement] = useState({});
    const [empleados, setEmpleados] = useState({});

    const renderObjetos = (item, index) => {
        return(
            <li key={index}>{item.id} - {item.nombre}</li>
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

/*
        console.log(objetos);
             
        dispatch(appStartInsertObject({id:te_empleado, value:"nombre"})).then('todo bien').catch('error');
             console.log(objetos);
             */


          //   dispatch(appGetObject);
             
            
            // setElement(JSON.parse(localStorage.getItem("lista")));
        // aqui    dispatch(appStartInsertObject({id:te_empleado, value:"nombre"}));
        
/*
            let x = 10;

            console.log("1");

            const promesa = new Promise((resolve, reject) => {
                setTimeout(() => {
                    x = x*3+2;
                    console.log("2");
                    resolve(x);
                }, 10000);
            })
            
            promesa.then(res => {
                console.log("3");
                console.log(objetos);
            })
*/
            reset();
        }
      }

      

      const handleClick = () => {
        console.log("Click");
        console.log(objetos);
        dispatch(appGetObject());
    }
    let listafinal = []
    const submit = (e) => {
      e.preventDefault();

      /*
      setTodos([...todos].concat({id:te_empleado, value:"nombre"}))
      setTodo("")

        let get = JSON.parse(localStorage.getItem("lista"));
        let set = localStorage.setItem('lista', JSON.stringify([{id:te_empleado, value:"nombre"}]));
      */
     /*
        setTodos(JSON.parse(localStorage.getItem("frutas")));
        console.log(todos);
        setTodo([{"id":"4","nombre":"fresa"}]);
        console.log(todo);
        let nvaLista = todos.concat(todo);
        console.log(nvaLista);
        
        localStorage.setItem('frutas', JSON.stringify(nvaLista));
        let listafinal = JSON.parse(localStorage.getItem("frutas"));
        console.log(listafinal);
        */

        let listaFrutas = JSON.parse(localStorage.getItem("frutas"));
        setTodos(listaFrutas);
        let nvoValor = {"id":"4","nombre":"fresa"};
        setTodo(nvoValor);
        let nvaLista = listaFrutas.concat(nvoValor);
        
        localStorage.setItem('frutas', JSON.stringify(nvaLista));
        listafinal = JSON.parse(localStorage.getItem("frutas"));
        console.log(listafinal);

        
        objetos.map(renderObjetos)
        /*
        let listaFrutas = JSON.parse(localStorage.getItem("frutas"));
        let nvoValor = [{"id":"4","nombre":"fresa"}];
        let nvaLista = listaFrutas.concat(nvoValor);
        
        localStorage.setItem('frutas', JSON.stringify(nvaLista));
        let listafinal = JSON.parse(localStorage.getItem("frutas"));
        console.log(listafinal);
*/
        /*
        let lista = [{"id":"1","nombre":"platano"},{"id":"2","nombre":"manzana"},{"id":"3","nombre":"sandia"}]
        let elemento = [{"nombre":"fresa"}];

        console.log(lista.concat(elemento));
        */
      
  }
    
      useEffect(() => {
        te_empleado_ref.current.focus();
        
        console.log(objetos);

        objetos.map(renderObjetos)
        reset();
      }, [])

    return (
        <>
            <Encabezado titulo = "Pruebas generales" />

            <button type="button" className="btn btn-info" onClick={handleClick}>Click</button>



            <form onSubmit={submit}>
                <input type="text" name="te_empleado" autoComplete="false" className="form-control" value={ te_empleado } onChange={ handleInputChange } onKeyDown={handleKeyDown} placeholder="Captura el numero de empleado" autoComplete="off" ref={te_empleado_ref} />
                <button type="submit" className="btn btn-info">Click</button>
            </form>

            {/*
                element.length > 0  &&
                <ul>
                    {element.map(renderObjetos)}
                </ul>
                */

                todos.length >= 0  &&
                <ul >
                    {todos.map(renderObjetos)}
                </ul>
            }
            
            
            
        </>
    )
}
