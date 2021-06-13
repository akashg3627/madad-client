import * as ActionTypes from './ActionTypes';

export const Donors = (state = {
    donors: [],
    isLoading: false,
    err: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_DONOR:
            return { ...state, isLoading: false, err: null, donors: action.payload };
        case ActionTypes.DONOR_LOADING:
            return { ...state, isLoading: true, err: null, donors: [] };
        case ActionTypes.DONOR_FAILED:
            return { ...state, isLoading: false, err: action.payload, donors: [] };
        default:
            return state;
    }
}