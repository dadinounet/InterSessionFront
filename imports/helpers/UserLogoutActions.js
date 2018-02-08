export const REQUEST_USER_LOGOUT = 'REQUEST_USER_LOGOUT';

export function disconnectUser(userInfo, res) {
    return {
        type: REQUEST_USER_LOGOUT,
        userInfo
    }
}

// export function disconnectUser(user) {
//     return function (dispatch) {
//         const postMessage = {
//             method: 'GET',
//             headers: {
//                 'Accept': 'application/json',
//                 'Authorization': user.token
//             },
//         };
//         return fetch(`http://httpbin.org/get`, postMessage)
//             .then(handleErrors)
//             .then(res => dispatch(disconnectUserState(user, res)))
//             .catch(error => dispatch(disconnectUserState(user, error)))
//     }
// }