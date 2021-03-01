import React from 'react'
import { Provider } from 'react-redux';

import { AppRouter } from './routers/AppRouter'

import { store } from './store/store';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'

library.add(fab, fas)


export const RhApp = () => {
    return (
        <Provider store={ store }>
            <AppRouter />
        </Provider>
    )
}
