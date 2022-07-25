import service from './service';
const URL = '/user';
const getUserService = (id) => {
    return service.get(`${URL}/${id}`);
};
export { getUserService };