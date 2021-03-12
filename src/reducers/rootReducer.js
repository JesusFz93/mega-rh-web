import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import {appReducer} from './appReducer';

import {uiReducer} from './uiReducer';
import {dbReducer} from './dbReducer';



export const rootReducer = combineReducers({
    authReducer: authReducer,
    appReducer: appReducer,
    uiReducer: uiReducer,
    dbReducer: dbReducer
    // TODO: AuthReducer
})

