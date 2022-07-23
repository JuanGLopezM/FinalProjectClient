import React, { useState } from 'react';
import { updateSubjectService, deleteSubjectService } from '../services/subject.services';
import { useNavigate } from 'react-router-dom'

function EditSubject({ setSubject, SubjectId, title, description, Tags, refreshSubject}) {
    const [inputTitle, setInputTitle] = useState(title);
    const [inputDescription, setInputDescription] = useState('');
    const [inputTags, setInputTags] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);

    const redirect = useNavigate()

    const handleSubmitSubject = async (e) => {
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
                <div className="ResourceCard card">
                    <h4>Edit/Delete Subject</h4>
                    <input
                        value={inputTitle}
                        onChange={(e) => {
                            setInputTitle(e.target.value);
                        }}
                    />
                    <input
                        value={inputDescription}
                        onChange={(e) => {
                            setInputDescription(e.target.value);
                        }}
                    />
                    <input
                        value={inputTags}
                        onChange={(e) => {
                            setInputTags(e.target.value);
                        }}
                    />
                    <button onClick={handleSubmitSubject} class="btn btn-outline-primary">Edit</button>
                    <button onClick={handleDeleteSubject} class="btn btn-outline-danger">Delete</button>
                </div>
            )}
        </div>
    );
}
export default EditSubject;