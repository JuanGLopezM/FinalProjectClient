import { useState, useEffect } from 'react';
import { getSubjectDetailsService } from '../services/subject.services';
import EditSubject from '../components/EditSubject';
import { Link, useParams } from 'react-router-dom';
import AddSection from '../components/AddSection';
import SectionCard from '../components/SectionCard';
function SubjectDetailsPage(props) {
    const [subject, setSubject] = useState(null);
    const { id } = useParams();
    const subjectId = id;
    console.log('ID:', id)
    const getSubject = async () => {
        localStorage.getItem('authToken');
        try {
            const response = await getSubjectDetailsService(id);
            setSubject(response.data);
        } catch (err) {
            console.log(err);
            console.log('hola mundo')
        }
    };
    useEffect(() => {
        getSubject();
        // eslint-disable-next-line
    }, []);
    console.log(subject);
    return (
        <div className="ProjectDetails">
        {subject && (
                <div className="ResourceCard card">
                    <h1>{subject.title}</h1>
                    <p>Description: {subject.description}</p>
                    <p>Tags: {subject.tags}</p>
                    {/* <p>Resources: {subject.resources}</p> */}
                </div>
            )}
                    <div className="row">
            {subject &&
                subject.sections.map((section) => {
                    return <SectionCard key={section._id} {...section} />;
                })}
            </div>
            <EditSubject setSubject={setSubject} refreshSubject={getSubject} SubjectId={subjectId} />
            <AddSection refreshSubject={getSubject} SubjectId={subjectId} />
            <Link to="/subjects">
                <button class="btn btn-outline-info">Back to Materials</button>
            </Link>
        </div>
    );
}
export default SubjectDetailsPage;