import { useState, useEffect } from 'react';
import { getSubjectDetailsService } from '../services/subject.services';
import EditSubject from '../components/EditSubject';
import { Link, useParams } from 'react-router-dom';
import AddSection from '../components/AddSection';
import SectionCard from '../components/SectionCard';
import ad from "../ad1.png";
import SearchBar from '../components/SearchBar';
import SubjectData from "../Data.json";
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
        <>
            {/* <nav class="navbar navbar-expand-lg justify-content-center rounded colorNav">
                <div class="collapse navbar-collapse justify-content-center" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link rounded" href="/">{subject.title}</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
        <div className="wrapper">
        <div className="firstCol">
        <SearchBar data={SubjectData} />
        </div>
        <div className="secondCol">
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
            <br></br>
            <br></br>
            <br></br>
            <EditSubject setSubject={setSubject} refreshSubject={getSubject} SubjectId={subjectId} />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <AddSection refreshSubject={getSubject} SubjectId={subjectId} />
            <br></br>
            <br></br>
            <Link to="/subjects">
                <button class="btn btn-outline-info">Back to Materials</button>
            </Link>
            </div>
            <div class="thirdCol">
          <img src={ad} alt="ad" />
          </div>
        </div>
        </>
    );
}
export default SubjectDetailsPage;