import fetch from "cross-fetch";

// todo : importer dans un seul fichier cf UserLoginActions
const handleErrors = (res) => {
    if (!res.ok) {
        throw res;
    }
    return res;
};

export const REQUEST_TEST = 'REQUEST_TEST';

export function requestedTest(testInfo) {
    return {
        type: REQUEST_TEST,
        testInfo
    }
}

export const REQUEST_TEST_SUCCESS = 'REQUEST_TEST_SUCCESS';

export function requestTestSuccess(testInfo, json) {
    return {
        type: REQUEST_TEST_SUCCESS,
        testInfo,
        data: json,
        receivedAt: Date.now()
    }
}

export const REQUEST_TEST_ERROR = 'REQUEST_TEST_ERROR';

export function requestTestError(testInfo, json) {
    return {
        type: REQUEST_TEST_ERROR,
        testInfo,
        error: json,
        receivedAt: Date.now()
    }
}

export function requestTest(testInfo) {
    return function (dispatch) {
        dispatch(requestedTest(testInfo));
        const postMessage = {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(testInfo)
        };
        return fetch(`http://httpbin.org/post`, postMessage)
            .then(handleErrors)
            .then(response => response.json())
            .then(json => dispatch(requestTestSuccess(testInfo, json)))
            .catch(error => dispatch(requestTestError(testInfo, error)))
    }
}
