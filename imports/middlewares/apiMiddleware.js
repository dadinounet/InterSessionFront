const API = "http://httpbin.org/status/403";

const handleErrors = (response) => {
    if (!response.ok) {
        throw response;
    }
    return response;
};

const apiMiddleware = (store) => (next) => (action) => {
    switch (action.type) {
        case 'HTTP_REQUEST_USER_LOGIN':
            let data = new FormData();
            data.append("json", JSON.stringify(action.data));
            fetch(API,
                {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    method: "POST",
                    body: data
                })
                .then(handleErrors)
                .then(response => response.json())
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
        default:
            next(action);
    }
};

export default apiMiddleware;