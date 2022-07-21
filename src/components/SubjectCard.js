import { Link } from 'react-router-dom';
import { deleteSubjectService } from '../services/subject.services';
import React, { useState } from 'react';
// We are deconstructing props object directly in the parentheses of the function
function SubjectCard({ title, description, _id, tags, resources }) {
    const idSubject = _id;
    const [isDeleted, setIsDeleted] = useState(false);
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
                <div className="row col-sm-3 circulo">
                    <div className="SubjectCard card col-sm-4 mb-2 rounded-pill d-flex">
                        <div>
                            <Link to={`/subjects/${_id}`}>
                                <h3>{title}</h3>
                            </Link>
                            {/* <p style={{ maxWidth: '400px' }}>Description: {description} </p>
            <p>Tags: {tags}</p>
            <p> Resources: {resources}</p> */}
                            <button onClick={handleDeleteSubject} class="btn btn-outline-danger">Eliminar</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
export default SubjectCard;