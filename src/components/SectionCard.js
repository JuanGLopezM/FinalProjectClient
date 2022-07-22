import { Link } from 'react-router-dom';
import { deleteSectionService } from '../services/section.services';
import React, { useState } from 'react';
// We are deconstructing props object directly in the parentheses of the function
function SectionCard({ title, tags, _id }) {
    const idSubject = _id;
    // const [isDeleted, setIsDeleted] = useState(false);
   // eslint-disable-next-line
    // const handleDeleteSection = async (e) => {
    //     try {
    //         await deleteSectionService(idSubject);
    //         setIsDeleted(true);
    //     } catch (err) {
    //         console.log(err);
    //     }
    // };

    return (
        <>
            {/* {!isDeleted && ( */}
                <div className="row col-sm-3 circulo">
                    <div className="SubjectCard card col-sm-4 mb-2 rounded-pill d-flex">
                        <div>
                            <Link to={`/subjects/${_id}`}>
                                <h3>{title}</h3>
                            </Link>
                            {/* <p style={{ maxWidth: '400px' }}>Description: {description} </p>
            <p>Tags: {tags}</p>
            <p> Resources: {resources}</p> */}
                            {/* <button onClick={handleDeleteSection} class="btn btn-outline-danger">Delete</button> */}
                        </div>
                    </div>
                </div>
            {/* )} */}
        </>
    );
}
export default SectionCard;