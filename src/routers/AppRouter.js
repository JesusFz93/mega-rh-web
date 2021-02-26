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

import { startLogin, login } from '../actions/authAction';
import {startLoadingElements} from '../actions/generalActions';

export const AppRouter = () => {

    const dispatch = useDispatch();

    const [ checking, setChecking ] = useState(true);
    const [ isLoggedIn, setIsLoggedIn ] = useState(false);
    
    const {usuario, name, id} = useSelector(state => state.authReducer);

    let TOKEN = localStorage.getItem('token');
    let ID = localStorage.getItem('id');
    let USER_ID = localStorage.getItem('user_id');
    


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

                    <PrivateRoute 
                        isAuthenticated={ isLoggedIn }
                        path="/"
                        component={ DashboardRoutes }
                    />


                </Switch>
            </div>
        </Router>
    )
}
