import service from './service';

const URL = '/favorites';

//add new favorite
const addNewFavoriteService = (newFavorite) => {
	return service.post(`${URL}`, newFavorite);
};

//delete resource
// const deleteResourceService = (id) => {
// 	return service.delete(`${URL}/${id}`);
// };

//update resource
// const updateResourceService = (id, updatedResource) => {
// 	return service.put(`${URL}/${id}`, updatedResource);
// };

export { addNewFavoriteService };