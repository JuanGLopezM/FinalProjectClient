import { Link } from 'react-router-dom';
import React from 'react';

function SubjectCard({ title, description, _id, tags, sections }) {
    const idSubject = _id;

    return (
        <>
            <div className="circulo">
                <div className="subjectCard loginCol">
                    <div className="center backgroundColor roundFont fadeIn first">
                        <Link to={`/subjects/${idSubject}`} class="btn btn-outline-warning btn-circle btn-xl" >
                            <h3 >{title}</h3>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}
export default SubjectCard;