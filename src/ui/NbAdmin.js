import React from 'react'; 
import { Link, NavLink, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux'

import { startLogout } from '../actions/authAction';

export const NbAdmin = () => {

    const dispatch = useDispatch();
    const { name } = useSelector(state => state.authReducer);

    const history = useHistory();

    const handleLogout = () => {
        
        history.replace('/login');

        dispatch( startLogout() )
    }

    // <nav className="navbar navbar-dark navbar-expand-sm navbar__main">

    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark " >
            
            
            <Link 
                className="navbar-brand" 
                to="/"
            >
                Mega RH Website - ADMIN
            </Link>

            <div className="navbar-collapse ">
                <div className="navbar-nav ">

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/adminsc"
                    >
                        AdminScreen
                    </NavLink>

                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/rolessc"
                    >
                        RolesScreen
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link " 
                        exact
                        to="/capturate"
                    >
                        Captura_TE
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/validate"
                    >
                        Valida_TE
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/rechazate"
                    >
                        TE_Rechazado
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/general"
                    >
                        General
                    </NavLink>
                    
                    <NavLink 
                        activeClassName="active"
                        className="nav-item nav-link" 
                        exact
                        to="/bross"
                    >
                        Bross
                    </NavLink>
                </div>
            </div>

            <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                <ul className="navbar-nav ml-auto">

                    <span className="nav-item nav-link text-light "> 
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
