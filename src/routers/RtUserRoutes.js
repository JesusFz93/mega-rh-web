import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

import { UserScreen } from '../components/ScUser/UserScreen';
import { CountScreen } from '../components/ScUser/CountScreen';

import { NbUser } from '../ui/NbUser';
import { Footer } from '../ui/Footer';

export const RtUserRoutes = () => {

    


    return (
        <>

            <NbUser />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/usersc" component={ UserScreen } />

                    

                    <Route exact path="/countsc" component={ CountScreen } />

                    <Redirect to="/inicio" />
                </Switch>
            </div>

            <Footer />
        </>
    )
}
