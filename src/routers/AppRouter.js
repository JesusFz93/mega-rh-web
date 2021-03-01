import React, {useState, useEffect} from 'react';
import {
    BrowserRouter as Router,
    Switch
  } from 'react-router-dom';
  
import { useDispatch, useSelector } from 'react-redux';

import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import { DashboardRoutes } from './DashboardRoutes';

import {RtAdminRoutes} from './RtAdminRoutes';

import { startLogin, login } from '../actions/authAction';
import {startLoadingElements} from '../actions/generalActions';
import { RtNoRoutes } from './RtNoRoutes';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    
    const {usuario, name, id} = useSelector(state => state.authReducer);

    let TOKEN = localStorage.getItem('token');
    let ID = localStorage.getItem('id');
    let USER_ID = localStorage.getItem('user_id');
    let role = localStorage.getItem('rol_name');
    
   // const role = 'HUMAN_RESOURCE_ADMINs';

    useEffect(() => {
        
        if ( TOKEN ) {
            dispatch( login( ID, USER_ID ) );
            setIsLoggedIn( true );
        } else {
            setIsLoggedIn( false );
        }

        setChecking(false);
        
    }, [dispatch, setChecking, setIsLoggedIn, TOKEN ])


    if ( checking ) {
        return (
            <h1>Espere...</h1>
        )
    }

    let componentes;
    switch (role) {
        case 'HUMAN_RESOURCE':
            componentes = <PrivateRoute path="/" component={ RtAdminRoutes } isAuthenticated={ isLoggedIn } />
            break;
    
        default:
            componentes =  <PrivateRoute path="/" component={ RtNoRoutes } isAuthenticated={ isLoggedIn } />
            break;
    }
    
    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute 
                        exact
                        path="/auth/login"
                        component={ AuthRouter }
                        isAuthenticated={ isLoggedIn }
                    />

                    {
                        componentes
                    }

                    


                </Switch>
            </div>
        </Router>
    )
}
