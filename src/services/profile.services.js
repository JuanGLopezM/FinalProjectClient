import service from './service';

const URL = '/profile';

//Add to profile
const addNewProfileService = (newFavorite) => {
    return service.post(`${URL}`, newFavorite);
};
//Return all resources in profile
const getProfileDetailsService = () => {
    return service.get(`${URL}`);
};
//Delete a resource in profile
const deleteProfileDetailsService = (id) => {
    return service.delete(`${URL}/${id}`);
};

export { addNewProfileService, getProfileDetailsService, deleteProfileDetailsService };