import React from 'react'; 
import { Link, NavLink, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'

import { startLogout } from '../actions/authAction';

export const Navbar = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.authReducer);

    const history = useHistory();

    const handleLogout = () => {
        
        history.replace('/login');

        dispatch( startLogout() )
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Mega RH Website
            </Link>

            <div className="navbar-collapse">
                <div className="navbar-nav">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/inicio"
                    >
                        Inicio
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/contacto"
                    >
                        Contacto
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-info"> 
                    {name}
                    </span>

                    <button 
                        className="btn btn-success"
                        onClick={ handleLogout }
                    >
                        Logout
                    </button>
                </ul>
            </div>
        </nav>
    )
}
