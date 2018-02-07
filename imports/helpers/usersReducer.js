const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_DATA_RECEIVED':
            action.data.isConnected = true;
            action.data.token = action.response.success.token;
            return action.data;
        case 'GET_USER_DATA_ERROR':
            action.data.loginError = action.response;
            return action.data;
        case 'GET_GITHUB_RECEIVED':
            return action.data;
        case 'GET_GITHUB_ERROR':
            action.data.error = action.response;
            return action.data;
        default:
            return state;
    }
};

export default usersReducer;