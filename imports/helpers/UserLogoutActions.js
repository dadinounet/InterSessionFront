import fetch from "cross-fetch";
import handleErrors from "./handleErrors";

export const REQUEST_USER_LOGOUT = 'REQUEST_USER_LOGOUT';

export function disconnectUserState(userInfo) {
    return {
        type: REQUEST_USER_LOGOUT,
        userInfo
    }
}

export function disconnectUser(token) {
    return function (dispatch) {
        const postMessage = {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Authorization': token
            },
        };
        return fetch(`http://httpbin.org/get`, postMessage)
            .then(handleErrors)
            .then(res => dispatch(disconnectUserState(token, res)))
            .catch(error => dispatch(disconnectUserState(token, error)))
    }
}