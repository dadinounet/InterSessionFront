import fetch from 'cross-fetch'

const handleErrors = (res) => {
    if (!res.ok) {
        throw res;
    }
    return res;
};

export const REQUEST_USER_LOGIN = 'REQUEST_USER_LOGIN';

export function requestUserLogin(userInfo) {
    return {
        type: REQUEST_USER_LOGIN,
        userInfo
    }
}

export const USER_LOGIN = 'USER_LOGIN';

function UserLogin(userInfo, json) {
    return {
        type: USER_LOGIN,
        userInfo,
        data: json,
        receivedAt: Date.now()
    }
}

export const ERROR_USER_LOGIN = 'ERROR_USER_LOGIN';

function UserLoginError(userInfo, json) {
    return {
        type: ERROR_USER_LOGIN,
        userInfo,
        error: json,
        receivedAt: Date.now()
    }
}

export function connectUser(userInfo) {
    return function (dispatch) {
        dispatch(requestUserLogin(userInfo));
        return fetch(`http://httpbin.org/status/403`)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(UserLogin(userInfo, json)))
            .catch(error => dispatch(UserLoginError(userInfo, error)))
    }
}