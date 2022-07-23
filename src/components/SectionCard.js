import { Link } from 'react-router-dom';

function SectionCard({ title, tags, _id }) {
    const idSubject = _id;

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
                        </div>
                    </div>
                </div>
                </div>
        </>
    );
}
export default SectionCard;