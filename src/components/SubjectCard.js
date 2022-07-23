import { Link } from 'react-router-dom';
import React from 'react';

function SubjectCard({ title, description, _id, tags, sections }) {
    const idSubject = _id;

    return (
        <>
           
                <div className="circulo">
                    <div className="subjectCard ">
                        <div className="center backgroundColor roundFont ">
                            <Link to={`/subjects/${idSubject}`} class="btn btn-outline-info" >
                                <h3 >{title}</h3>
                            </Link>
                        </div>
                    </div>
                </div>
        </>
    );
}
export default SubjectCard;