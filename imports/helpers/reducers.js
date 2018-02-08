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
                id: action.data.success.id,
                email: action.userInfo.email,
                token: action.data.success.token,
                isAuthenticated: true,
            });
        case USER_REGISTER:
            return Object.assign({}, state, {
                id: action.data.success.id,
                token: action.data.success.token,
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

const testInitialState = {
    github: '',
    TestPhploc: 1,
    TestPhpmd: 1,
    TestSecurityChecker: 1,
    TestPHPmnd: 1,
    TestPhpcodesniffer: 1,
    TestPhpcpd: 1
    isSubmitted: false,
    status: null
};

function testReducer(state = testInitialState, action) {
    switch (action.type) {
        case REQUEST_TEST:
            return Object.assign({}, state, {});
        case REQUEST_TEST_SUCCESS:
            return Object.assign({}, state, {
                isSubmitted: true,
                status: action.success,
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