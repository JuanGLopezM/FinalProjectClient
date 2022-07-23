import { Link } from 'react-router-dom';
// import { deleteSectionService } from '../services/section.services';
// import React, { useState } from 'react';
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
            <div  className="circulo">
                <div className="subjectCard">
                    <div className="center backgroundColor roundFont">
                        <div>
                            <Link to={`/sections/${idSubject}`} class="btn btn-outline-info">
                                <h3>{title}</h3>
                            </Link>
                            {/* <p style={{ maxWidth: '400px' }}>Description: {description} </p>
            <p>Tags: {tags}</p>
            <p> Resources: {resources}</p> */}
                            {/* <button onClick={handleDeleteSection} class="btn btn-outline-danger">Delete</button> */}
                        </div>
                    </div>
                </div>
                </div>
            {/* )} */}
        </>
    );
}
export default SectionCard;