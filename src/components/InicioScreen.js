import React from 'react';
import { useFormulario } from '../hooks/useForm';
import {RtAdminRoutes} from '../routers/RtAdminRoutes';
import {RtUserRoutes} from '../routers/RtUserRoutes';

export const InicioScreen = () => {

    const [ formValues, handleInputChange ] = useFormulario({
        email: 'JFERNAND'
    });

    const { email } = formValues;

    const usuario = {
        "user_id": ""
    }

    const handleLogin = (e) => {
        e.preventDefault();


        usuario.user_id = email;

        handleSwitch(email);
    }

    const handleSwitch = (role) => {
        switch(role) {
          case 'HUMAN_RESOURCE_ADMIN':
              console.log("HUMAN_RESOURCE_ADMIN");
              return <RtAdminRoutes />;
          case 'HUMAN_RESOURCE':
            console.log("HUMAN_RESOURCE");
            return <RtUserRoutes />;
          case 'HUMAN_RESOURCE_ASSISTAN':
            console.log('asistente');
            return "asistente";
          default:
            console.log('no tiene rol');
            return "no tiene rol";
        }
      }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                    <h3>Ingreso</h3>
                    <form onSubmit={ handleLogin }>
                        <div className="form-group">
                            <input 
                                type="text"
                                placeholder="Email"
                                name="email"
                                className="auth__input"
                                autoComplete="off"
                                value={ email }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                            >
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
