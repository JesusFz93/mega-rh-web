
import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { AdminScreen } from '../components/ScAdmin/AdminScreen';
import { RolesScreen } from '../components/ScAdmin/RolesScreen';

import { NbAdmin } from '../ui/NbAdmin';
import { Footer } from '../ui/Footer';
import { NoRouteScreen } from '../components/ScOpen/NoRouteScreen'
import { NbNoRoutes } from '../ui/NbNoRoutes';

export const RtNoRoutes = () => {

    


    return (
        <>

            <NbNoRoutes />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/noroute" component={ NoRouteScreen } />

                    <Redirect to="/noroute" />
                </Switch>
            </div>

            <Footer />
        </>
    )
}
