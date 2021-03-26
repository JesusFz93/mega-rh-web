import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { AdminScreen } from '../components/ScAdmin/AdminScreen';
import { RolesScreen } from '../components/ScAdmin/RolesScreen';

import { NbAdmin } from '../ui/NbAdmin';
import { Footer } from '../ui/Footer';
import { CapturaTiempoExtraScreen } from '../components/screens/CapturaTiempoExtraScreen';
import { ValidaTiempoExtraScreen } from '../components/screens/ValidaTiempoExtraScreen';
import { RechazadoTiempoExtraScreen } from '../components/screens/RechazadoTiempoExtraScreen';
import { GeneralScreen } from '../components/GeneralScreen';
import { Bross } from '../components/Bross';
import { FormularioScreen } from '../components/screens/FormularioScreen';

export const RtAdminRoutes = () => {

    


    return (
        <>

            <NbAdmin />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/adminsc" component={ AdminScreen } />
                    <Route exact path="/rolessc" component={ RolesScreen } />
                    <Route exact path="/capturate" component={ CapturaTiempoExtraScreen } />
                    <Route exact path="/validate" component={ ValidaTiempoExtraScreen } />
                    <Route exact path="/rechazate" component={ RechazadoTiempoExtraScreen } />
                    <Route exact path="/general" component={ GeneralScreen } />
                    <Route exact path="/bross" component={ Bross } />
                    <Route exact path="/formulario" component={ FormularioScreen } />

                    <Redirect to="/adminsc" />
                </Switch>
            </div>

            <Footer />
        </>
    )
}
