import service from './service';

const URL = '/sections';

//add new section
const addNewSectionService = (newSection) => {
    return service.post(`${URL}`, newSection);
};

const getSectionDetailsService = (id) => {
    return service.get(`${URL}/${id}`);
};

//delete section
const deleteSectionService = (id) => {
    return service.delete(`${URL}/${id}`);
};

//update section
const updateSectionService = (id, updatedSection) => {
    return service.put(`${URL}/${id}`, updatedSection);
};

export { addNewSectionService, getSectionDetailsService, deleteSectionService, updateSectionService };