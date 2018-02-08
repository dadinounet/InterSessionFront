import fetch from 'cross-fetch'

const handleErrors = (res) => {
    if (!res.ok) {
        throw res;
    }
    return res;
};

export const REQUEST_USER_REGISTER = 'REQUEST_USER_REGISTER';

export function requestUserRegister(userInfo) {
    return {
        type: REQUEST_USER_REGISTER,
        userInfo
    }
}

export const USER_REGISTER = 'USER_REGISTER';

function UserRegister(userInfo, json) {
    return {
        type: USER_REGISTER,
        userInfo,
        data: json,
        receivedAt: Date.now()
    }
}

export const ERROR_USER_REGISTER = 'ERROR_USER_REGISTER';

function UserRegisterError(userInfo, json) {
    return {
        type: ERROR_USER_REGISTER,
        userInfo,
        error: json,
        receivedAt: Date.now()
    }
}

export function registerUser(userInfo) {
    return function (dispatch) {
        dispatch(requestUserRegister(userInfo));
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
            .then(json => dispatch(UserRegister(userInfo, json)))
            .catch(error => dispatch(UserRegisterError(userInfo, error)))
    }
}