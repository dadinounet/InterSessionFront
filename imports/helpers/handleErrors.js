export default
const handleErrors = (res) => {
    if (!res.ok) {
        throw res;
    }
    return res;
};