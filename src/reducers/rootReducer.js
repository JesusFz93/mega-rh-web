import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import {appReducer} from './appReducer';

import {uiReducer} from './uiReducer';



export const rootReducer = combineReducers({
    authReducer: authReducer,
    appReducer: appReducer,
    uiReducer: uiReducer
    // TODO: AuthReducer
})

