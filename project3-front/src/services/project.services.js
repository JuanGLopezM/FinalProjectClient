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

export { getAllSubjectsService, addNewSubjectService, getSubjectDetailsService };
