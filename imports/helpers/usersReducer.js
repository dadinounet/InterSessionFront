const usersReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_USER_DATA_RECEIVED' :
            break;
        default:
            return state;
    }
};

export default usersReducer;