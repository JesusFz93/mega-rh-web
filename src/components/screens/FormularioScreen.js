import React, {useRef,useEffect} from 'react'
import { useForm } from "react-hook-form";
import {yupResolver} from '@hookform/resolvers/yup'
import * as yup from "yup"
import {useKey} from '../../hooks/useKey'

const schema = yup.object().shape({
    nombre: yup.string().required("Se requiere el nombre").min(3)
});


export const FormularioScreen = () => {

    const key = useKey('enter')

    const evento = () => {
        console.log('le diste al evento');
    }
    
  const nombreRef = useRef();
  const {register, handleSubmit, setValue, errors, reset } =  useForm({resolver: yupResolver(schema), defaultValues: {nombre: ""}});

    const onSubmitHandle = (data) => {
        console.log(data);
        alert(JSON.stringify(data) );
        reset();
        nombreRef.current.focus()
    }

    useEffect(() => {
        if (nombreRef.current) {
              register(nombreRef.current)
              nombreRef.current.focus()
            }
            setValue("nombre","jesususus")
            console.log("values");
        }, []);

   // console.log(errors);

    return (
        <>
        
            <form onSubmit={handleSubmit(onSubmitHandle)}>
                <div className="form-group">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" className="form-control" placeholder="Jesus" name="nombre" ref={(e) => {
                        register(e)
                        nombreRef.current = e // you can still assign to ref
                    }} />
                    {errors.nombre && <p className="textos__error">{errors.nombre?.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1" name="select" ref={register}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                    {errors.select && <p className="textos__error">{errors.select?.message}</p>}
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
                    <select multiple className="form-control" id="exampleFormControlSelect2" name="select2" ref={register}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="tarea" ref={register}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleFormControlFile1">Example file input</label>
                    <input type="file" className="form-control-file" id="exampleFormControlFile1" name="upload" ref={register} />
                </div>
                <div className="form-group">
                    <label htmlFor="formControlRange">Example Range input</label>
                    <input type="range" className="form-control-range" id="formControlRange" name="range" ref={register} />
                </div>
                <div className="form-group">
                    <input type="submit" value="Click aqui" className="btn btn-success" />
                </div>
            </form>
        </>
    )
}