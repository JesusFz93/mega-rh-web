import React, {useState, useRef, useEffect} from 'react'
import { useFormulario } from '../hooks/useForm';

export const Bross = () => {
    
    const [todos, setTodos] = useState([]);

    const [ formValues, handleInputChange, reset ] = useFormulario({te_empleado: ''});
    const { te_empleado } = formValues;

    const te_empleado_ref = useRef();
    
    const handleClick = () => {
        let lista = JSON.parse(localStorage.getItem("frutas"));
        console.log(lista);
        setTodos(lista);
    }

    const handleSet = () => {
        localStorage.setItem('frutas', JSON.stringify(todos));
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        

        const newTodo = {
            id: new Date().getTime(),
            nombre: te_empleado
        }

        setTodos([...todos].concat(newTodo))
        reset()
        te_empleado_ref.current.focus();

        
        
    }

    useEffect(() => {
        let lista = JSON.parse(localStorage.getItem("frutas"));
        setTodos(lista);
    }, [])

    useEffect(() => {
        localStorage.setItem('frutas', JSON.stringify(todos));
    }, [todos])

    return (
        <>
        <button type="button" onClick={handleClick} >get</button>
        <button type="button" onClick={handleSet} >set</button>
        <form onSubmit={handleSubmit}>
            <input type="text" onChange={handleInputChange} value={te_empleado} name="te_empleado" placeholder="Captura el numero de empleado" autoComplete="off" ref={te_empleado_ref} />
            <button type="submit">Add todo</button>
        </form>
        { todos.map((todo) => <div key={todo.id}>{todo.id} - {todo.nombre}</div>)}
        </>
    )
}
