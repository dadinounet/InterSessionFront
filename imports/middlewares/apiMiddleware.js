const API = "http://localhost";

const handleErrors = (response) => {

};

const apiMiddleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case 'HTTP_REQUEST_USER_LOGIN':

            break;
        default:
            break;
    }
};

export default apiMiddleware;