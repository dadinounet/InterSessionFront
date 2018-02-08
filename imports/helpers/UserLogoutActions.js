export const REQUEST_USER_LOGOUT = 'REQUEST_USER_LOGOUT';

export function disconnectUser(userInfo) {
    return {
        type: REQUEST_USER_LOGOUT,
        userInfo
    }
}
