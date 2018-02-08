import {combineReducers} from 'redux';
import {REQUEST_USER_LOGIN, USER_LOGIN, ERROR_USER_LOGIN} from './UserLoginActions';
import {REQUEST_USER_REGISTER, USER_REGISTER, ERROR_USER_REGISTER} from './UserRegisterActions';
import {REQUEST_USER_LOGOUT} from './UserLogoutActions';
import {REQUEST_TEST, REQUEST_TEST_SUCCESS, REQUEST_TEST_ERROR} from './TestsActions';

const userInitialState = {
    email: '',
    token: '',
    isAuthenticated: false,
    isRegistered: false,
    history: [],
    rememberMe: true
};

function userReducer(state = userInitialState, action) {
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
        case REQUEST_USER_LOGOUT:
            return Object.assign({}, state, userInitialState);
        default:
            return state
    }
}

const testInitialTest = {
    github: '',
    test1: true,
    test2: true,
    test3: true,
    test4: true,
    isSubmitted: false
};

function testReducer(state = testInitialTest, action) {
    switch (action.type) {
        case REQUEST_TEST:
            return Object.assign({}, state, {});
        case REQUEST_TEST_SUCCESS:
            return Object.assign({}, state, {
                isSubmitted: true,
            });
        case REQUEST_TEST_ERROR:
            return Object.assign({}, state, {
                error: true
            });
        default:
            return state
    }
}

const rootReducer = combineReducers({userReducer, testReducer});

export default rootReducer;