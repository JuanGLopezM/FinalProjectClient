import { Link } from 'react-router-dom';

function SectionCard({ title, tags, _id }) {
    const idSubject = _id;

    return (
        <>
            <div className="circulo">
                <div className="subjectCard loginCol">
                    <div className="center backgroundColor roundFont fadeIn first">
                        <div>
                            <Link to={`/sections/${idSubject}`} class="btn btn-outline-warning btn-circle btn-xl">
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