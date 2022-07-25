import service from './service';

const URL = '/profile';

//add new favorite
const addNewProfileService = (newFavorite) => {
	return service.post(`${URL}`, newFavorite);
};

const getProfileDetailsService = () => {
    return service.get(`${URL}`);
};

//delete resource
// const deleteResourceService = (id) => {
// 	return service.delete(`${URL}/${id}`);
// };

//update resource
// const updateResourceService = (id, updatedResource) => {
// 	return service.put(`${URL}/${id}`, updatedResource);
// };

export { addNewProfileService, getProfileDetailsService };