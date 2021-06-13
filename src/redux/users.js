import * as ActionTypes from './ActionTypes';

const userSchema ={
    name:'',
    email: '',
    mobileNumber:''
}

export const Users = (state = {
    user: localStorage.getItem('creds') ? JSON.parse(localStorage.getItem('creds')) : userSchema,
    num: '0',
    token: localStorage.getItem('token') ,
    isAuth: localStorage.getItem('token') ? true : false,
    err: null
}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_USER:
            return { ...state, err: null, user: action.user, num:'0' , isAuth: true, token: action.token };
       
        case ActionTypes.USER_FAILED:
            return { ...state, err: action.payload, user: null, num: '0', isAuth:false, token: null};
        case ActionTypes.ADD_OTP:
                return { ...state, err: null, user: null , num:action.payload , isAuth:false };
        default:
            return state;
    }
}