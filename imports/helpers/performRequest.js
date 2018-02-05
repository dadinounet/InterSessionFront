import axios from 'axios';

const performRequest = (type, url, postData) => {

    url = encodeURI(url);
    let request = false;
    let response = null;

    switch (type) {
        case 'get':
            request = axios.get(url);
            break;
        case 'post':
            request = axios.post(url, postData, {
                headers: {
                    'Content-Type': 'application/json;charset=UTF-8',
                }
            });
            break;
    }

    if (request) {
        request.then(function (response) {
            console.log(response);
        }).catch(function (error) {
            console.log(error);
        });
    }
};

export default performRequest;