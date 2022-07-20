import { Link } from 'react-router-dom';
import { deleteSubjectService } from '../services/subject.services';
import React, { useState } from 'react';
// We are deconstructing props object directly in the parentheses of the function
function SubjectCard({ title, description, _id, tags, resources  }) {
    const idSubject = _id;
    const [ isDeleted, setIsDeleted ] = useState(false);
    const handleDeleteSubject = async (e) => {
        try {
            await deleteSubjectService(idSubject);
            setIsDeleted(true);
        } catch (err) {
            console.log(err);
        }
    };
    return (
		<>
        {!isDeleted && (
		<div className="SubjectCard card">
            <div>
            <Link to={`/subjects/${_id}`}>
                <h3>{title}</h3>
            </Link>
            <p style={{ maxWidth: '400px' }}>Description: {description} </p>
            <p>Tags: {tags}</p>
            <p> Resources: {resources}</p>
            <button onClick={handleDeleteSubject}>Eliminar</button>
            </div>
			</div>
        )}
		</>
    );
}
export default SubjectCard;