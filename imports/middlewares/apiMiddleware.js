const API = "http://httpbin.org/post";

const handleErrors = (response) => {
    if (!response.ok) {
        throw response;
    }
    return response;
};

const apiMiddleware = (store) => (next) => (action) => {
    let data = new FormData();
    const header = {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    };
    switch (action.type) {
        case 'HTTP_REQUEST_USER_LOGIN':
            data.append("json", JSON.stringify(action.data));
            fetch(API,
                {
                    headers: header,
                    method: "POST",
                    body: data
                })
                .then(response => response.json(), handleErrors)
                .then(data => next({
                    type: 'GET_USER_DATA_RECEIVED',
                    data: action.data,
                    response: data
                }))
                .catch(error => next({
                    type: 'GET_USER_DATA_ERROR',
                    data: action.data,
                    response: error
                }));
            break;
        case 'HTTP_REQUEST_USER_REGISTER':
            data.append("json", JSON.stringify(action.data));
            fetch(API,
                {
                    headers: header,
                    method: "POST",
                    body: data
                })
                .then(response => response.json(), handleErrors)
                .then(data => next({
                    type: 'GET_USER_R_DATA_RECEIVED',
                    data: action.data,
                    response: data
                }))
                .catch(error => next({
                    type: 'GET_USER_R_DATA_ERROR',
                    data: action.data,
                    response: error
                }));
            break;
        case 'HTTP_REQUEST_GITHUB':
            data.append("json", JSON.stringify(action.data));
            fetch(API,
                {
                    headers: header,
                    method: "POST",
                    body: data
                })
                .then(response => response.json(), handleErrors)
                .then(data => next({
                    type: 'GET_GITHUB_RECEIVED',
                    data: action.data,
                    response: data
                }))
                .catch(error => next({
                    type: 'GET_GITHUB_ERROR',
                    data: action.data,
                    response: error
                }));
            break;
        default:
            next(action);
    }
};

export default apiMiddleware;