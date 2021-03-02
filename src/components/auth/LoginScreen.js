import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useFormulario } from '../../hooks/useForm';
import { startLoginEmailPassword } from '../../actions/authAction';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector( state => state.uiReducer );

    const [ formValues, handleInputChange ] = useFormulario({
        email: 'JFERNAND',
        password: 'perrei93'
    });

    const { email, password } = formValues;

    const usuario = {
        "user_id": "",
        "password": ""
    }

    const handleLogin = (e) => {
        e.preventDefault();


        usuario.user_id = email;
        usuario.password = password;

        dispatch( startLoginEmailPassword( usuario ) );
    }

    return (
        <div className="container login-container">
            <div className="row">
                <div className="col-md-6 login-form-1">
                <h3 className="auth__title">Login</h3>
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
                            <input 
                                type="password"
                                placeholder="Password"
                                name="password"
                                className="auth__input"
                                value={ password }
                                onChange={ handleInputChange }
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-primary btn-block"
                                disabled={ loading }
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
