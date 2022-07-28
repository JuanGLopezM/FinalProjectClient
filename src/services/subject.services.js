import service from './service';

const URL = '/subjects';

const getAllSubjectsService = () => {
	return service.get(`${URL}/`);
};
const getSubjectDetailsService = (id) => {
	return service.get(`${URL}/${id}`);
};

const addNewSubjectService = (newSubject) => {
	return service.post(`${URL}/`, newSubject);
};

//update resource
const updateSubjectService = (id, updatedSubject) => {
	return service.put(`${URL}/${id}`, updatedSubject);
};

//delete resource
const deleteSubjectService = (id) => {
	return service.delete(`${URL}/${id}`);
};
export { getAllSubjectsService, getSubjectDetailsService, addNewSubjectService, updateSubjectService, deleteSubjectService };