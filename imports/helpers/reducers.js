import {combineReducers} from 'redux';
import {REQUEST_USER_LOGIN, USER_LOGIN, ERROR_USER_LOGIN} from './UserLoginActions';
import {REQUEST_USER_REGISTER, USER_REGISTER, ERROR_USER_REGISTER} from './UserRegisterActions';

const loginInitialState = {
    email: '',
    token: '',
    isAuthenticated: false,
    isRegistered: false,
    history: [],
    rememberMe: true
};

function userReducer(state = loginInitialState, action) {
    switch (action.type) {
        case REQUEST_USER_LOGIN:
        case REQUEST_USER_REGISTER:
            return Object.assign({}, state, {});
        case USER_LOGIN:
            return Object.assign({}, state, {
                email: action.userInfo.email,
                isAuthenticated: true,
            });
        case USER_REGISTER:
            return Object.assign({}, state, {
                isRegistered: true,
                isAuthenticated: true,
            });
        case ERROR_USER_LOGIN:
        case ERROR_USER_REGISTER:
            return Object.assign({}, state, {
                error: true
            });
        default:
            return state
    }
}

const rootReducer = combineReducers({userReducer});

export default rootReducer