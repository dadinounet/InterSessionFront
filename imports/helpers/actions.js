import fetch from 'cross-fetch'

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
        return fetch(`https://httpbin.org/get`)
            .then(
                response => response.json(),
                error => console.log('An error occurred.', error)
            )
            .then(json => dispatch(UserLogin(userInfo, json))
            )
    }
}