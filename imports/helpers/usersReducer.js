const usersReducer = (state = {}, action) => {
    switch (action.type) {
        case 'GET_USER_DATA_RECEIVED':
            action.data.isConnected = true;
            return action.data;
        case 'GET_USER_DATA_ERROR':
            action.data.loginError = action.response;
            return action.data;
        case 'GET_USER_R_DATA_RECEIVED':
            action.data.isRegistered = true;
            return action.data;
        case 'GET_USER_R_DATA_ERROR':
            action.data.registerError = action.response;
            return action.data;
        default:
            return state;
    }
};

export default usersReducer;