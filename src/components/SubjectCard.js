import { Link } from 'react-router-dom';
// import { deleteSubjectService } from '../services/subject.services';
// import { useState } from 'react';
import React from 'react';
// We are deconstructing props object directly in the parentheses of the function
function SubjectCard({ title, description, _id, tags, sections }) {
    const idSubject = _id;
    // const [isDeleted, setIsDeleted] = useState(false);
    // eslint-disable-next-line
    // const handleDeleteSubject = async (e) => {
    //     try {
    //         await deleteSubjectService(idSubject);
    //         setIsDeleted(true);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };
    return (
        <>
            {/* {!isDeleted && ( */}
                <div className="circulo">
                    <div className="subjectCard ">
                        <div className="center backgroundColor roundFont ">
                        
                            <Link to={`/subjects/${idSubject}`} class="btn btn-outline-info" >
                                <h3 >{title}</h3>
                            </Link>
                            {/* <p style={{ maxWidth: '400px' }}>Description: {description} </p>
            <p>Tags: {tags}</p>
            <p> Resources: {resources}</p> */}
                            {/* <button onClick={handleDeleteSubject} class="btn btn-outline-danger">Eliminar</button> */}
                        </div>
                    </div>
                </div>
            {/* )} */}
        </>
    );
}
export default SubjectCard;