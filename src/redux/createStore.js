import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import { Donors } from './donor';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { Seekers } from './seeker';
import {Users} from './users'

export const ConfigureStore = () => {
    const store = createStore(combineReducers({ donorReducer: Donors, seekerReducer: Seekers, users: Users }), compose(applyMiddleware(thunk)));
    return store;
}
