import service from './service';

const URL = '/resources';

//add new resource
const addNewResourceService = (newResource) => {
	return service.post(`${URL}`, newResource);
};

//add new external resource
const addNewExternalResourceService = (newResource) => {
	return service.post(`${URL}/addnew`, newResource);
};

//delete resource
const deleteResourceService = (id) => {
	return service.delete(`${URL}/${id}`);
};

//update resource
const updateResourceService = (id, updatedResource) => {
	return service.put(`${URL}/${id}`, updatedResource);
};

export { addNewResourceService, addNewExternalResourceService, deleteResourceService, updateResourceService };
