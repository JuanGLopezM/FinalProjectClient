import React, { useState } from 'react';
import { updateSectionService, deleteSectionService } from '../services/section.services';
import { useNavigate } from 'react-router-dom'
function EditSection({ setSection, SectionId, title, Tags, refreshSection }) {
    const [inputTitle, setInputTitle] = useState(title);
    const [inputTags, setInputTags] = useState('');
    const [isDeleted, setIsDeleted] = useState(false);
    const redirect = useNavigate()
    
    const handleEditSection = async (e) => {
        try {
            const updatedSection = { inputTitle, inputTags };
            const responseSection = await updateSectionService(SectionId, updatedSection);
            setSection(responseSection.data)
            refreshSection()
        } catch (err) {
            console.log(err);
            
        }
    };
    const handleDeleteSubject = async (e) => {
        try {
            await deleteSectionService(SectionId);
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
                    <p>Section</p>
                    <input
                        value={inputTitle}
                        onChange={(e) => {
                            setInputTitle(e.target.value);
                        }}
                    />
                    <input
                        value={inputTags}
                        onChange={(e) => {
                            setInputTags(e.target.value);
                        }}
                    />
                    <button onClick={handleEditSection} class="btn btn-outline-primary">Edit</button>
                    <button onClick={handleDeleteSubject} class="btn btn-outline-danger">Delete</button>
                </div>
            )}
        </div>
    );
}
export default EditSection;