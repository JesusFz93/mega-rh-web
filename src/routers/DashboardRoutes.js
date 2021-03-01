import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { ContactoScreen } from '../components/ContactoScreen';
import { InicioScreen } from '../components/InicioScreen';

import { Navbar } from '../ui/Navbar';
import { Footer } from '../ui/Footer';
import { AdminScreen } from '../components/ScAdmin/AdminScreen';
import { UserScreen } from '../components/ScUser/UserScreen';
import { CountScreen } from '../components/ScUser/CountScreen';
import { RolesScreen } from '../components/ScAdmin/RolesScreen';

export const DashboardRoutes = () => {

   

    return (
        <>

            <Navbar />

            <div className="container mt-2">
                <Switch>

                    

                    <Route exact path="/inicio" component={ InicioScreen } />

                    

                    <Route exact path="/contacto" component={ ContactoScreen } />

                    <Redirect to="/inicio" />
                </Switch>
            </div>

            <Footer />
        </>
    )
}
