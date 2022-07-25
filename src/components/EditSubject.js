import React, { useState } from 'react';
import { updateSubjectService, deleteSubjectService } from '../services/subject.services';
import { useNavigate } from 'react-router-dom'
function EditSubject({ setSubject, SubjectId, title, description, Tags, refreshSubject}) {
    const [inputTitle, setInputTitle] = useState(title);
    const [inputDescription, setInputDescription] = useState('');
    const [inputTags, setInputTags] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);
    const redirect = useNavigate()
    const handleEditSubject = async (e) => {
        try {
            const updatedSubject = { inputTitle, inputDescription, inputTags };
            const responseSubj = await updateSubjectService(SubjectId, updatedSubject);
            console.log('res. subject:', responseSubj.data)
            setSubject(responseSubj.data)
            refreshSubject();
            console.log('idSubject:', SubjectId)
        } catch (err) {
            console.log(err);
            console.log('Holi')
        }
    };
    const handleDeleteSubject = async (e) => {
        try {
            await deleteSubjectService(SubjectId);
            setIsDeleted(true);
            redirect('/subjects')
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            {!isDeleted && (
                <div>
                <h3>Edit/Delete Subject</h3>
                <form onSubmit={handleEditSubject}>
                <div class="form-row">
                    <div class="col">
                        <input type="text" name="inputTitle" class="form-control" placeholder="Title"  value={inputTitle} onChange={(e) => {setInputTitle(e.target.value); }} />
                    </div>
                    <div class="col">
                        <input  type="text" name="inputDescription" class="form-control" placeholder="Description"  value={inputDescription} onChange={(e) => { setInputDescription(e.target.value); }} />
                    </div>
                    <div class="col">
                        <input type="text" name="inputTags" class="form-control" placeholder="Tags" value={inputTags} onChange={(e) => { setInputTags(e.target.value); }} />
                    </div>
                </div>
                <button type="submit" class="btn btn-outline-success">Edit</button>
                </form>
                <button onClick={handleDeleteSubject} class="btn btn-outline-danger">Delete</button>
                </div>
            )}
        </div>
    );
}
export default EditSubject;