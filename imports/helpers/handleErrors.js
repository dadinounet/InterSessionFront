const handleErrors = (res) => {
    if (!res.ok) {
        throw res;
    }
    return res;
};

export default handleErrors