import * as ActionTypes from './ActionTypes';

export const Seekers = (state = {
    seekers: [],
    isLoading: false,
    err: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_SEEKER:
            return { ...state, isLoading: false, err: null, seekers: action.payload };
        case ActionTypes.SEEKER_LOADING:
            return { ...state, isLoading: true, err: null, seekers: [] };
        case ActionTypes.SEEKER_FAILED:
            return { ...state, isLoading: false, err: action.payload, seekers: [] };
        default:
            return state;
    }
}