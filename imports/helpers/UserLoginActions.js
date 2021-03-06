import fetch from 'cross-fetch'
import handleErrors from './handleErrors';

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
        //data: json,
        data: {
            "success": {
                "token": "eyJ0eXAiOiJK",
                "name": "username",
                "id": 1,
                "connection_date_update": 1
            }
        },
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
        const postMessage = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userInfo)
        };
        return fetch(`http://httpbin.org/post`, postMessage)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(UserLogin(userInfo, json)))
            .catch(error => dispatch(UserLoginError(userInfo, error)))
    }
}