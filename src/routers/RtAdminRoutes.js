import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { AdminScreen } from '../components/ScAdmin/AdminScreen';
import { RolesScreen } from '../components/ScAdmin/RolesScreen';

import { NbAdmin } from '../ui/NbAdmin';
import { Footer } from '../ui/Footer';

export const RtAdminRoutes = () => {

    


    return (
        <>

            <NbAdmin />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/adminsc" component={ AdminScreen } />

                    

                    <Route exact path="/rolessc" component={ RolesScreen } />

                    <Redirect to="/adminsc" />
                </Switch>
            </div>

            <Footer />
        </>
    )
}
