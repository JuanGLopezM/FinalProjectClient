import { useState, useEffect, useContext } from 'react';
import { getSubjectDetailsService } from '../services/subject.services';
import EditSubject from '../components/EditSubject';
import { Link, useParams } from 'react-router-dom';
import AddSection from '../components/AddSection';
import SectionCard from '../components/SectionCard';
import ad from "../adColaborator.png";
import { AuthContext } from "./../context/auth.context";
function SubjectDetailsPage(props) {
    const [subject, setSubject] = useState(null);
    const { id } = useParams();
    const subjectId = id;
    const [searchTerm, SetSearchTerm] = useState('')
    const { user } = useContext(AuthContext);
    const getSubject = async () => {
        localStorage.getItem('authToken');
        try {
            const response = await getSubjectDetailsService(id);
            setSubject(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getSubject();
        // eslint-disable-next-line
    }, []);
    return(
        <>
            <div className="wrapper">
                <div className="firstCol">
                    <div>
                        <input type="text" placeholder="Search" onChange={event => {SetSearchTerm(event.target.value)}}/>
                    </div>
                    <br></br>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img src={ad} alt="ad" />
                    </a>
                </div>
                <div className="secondCol">
                    {subject && (
                    <div className="heading">
                    <br></br>
                    <br></br>
                        <h1><b>{subject.title}</b></h1>
                        <h5><b>Description:</b> {subject.description}</h5>
                        <br></br>
                    </div>
                    )}
                    <div className="row">
                        {subject && subject.sections.filter((sectionSearched)=>{
                            if(searchTerm == "" ) {
                                return sectionSearched
                            }else if(sectionSearched.title.toLowerCase().includes(searchTerm.toLowerCase())){
                                return sectionSearched
                            }
                        }).map((section) => {
                            return <SectionCard key={section._id} {...section} />;
                        })}
                    </div>
                    <br></br>
                    <br></br>
                    <br></br>
                    {(user.email === 'Admin@gmail.com')
                        ?(<div><hr></hr><EditSubject setSubject={setSubject} refreshSubject={getSubject} SubjectId={subjectId} /></div>)
                        :(<></>)
                    }
                    <br></br>
                    <br></br>
                    <br></br>
                    {(user.email === 'Admin@gmail.com')
                        ?(<div><hr></hr><AddSection refreshSubject={getSubject} SubjectId={subjectId} /></div>)
                        :(<></>)
                    }
                    <br></br>
                    <br></br>
                    <Link to="/subjects">
                        <button class="btn btn-outline-info">Back to Materials</button>
                    </Link>
                </div>
                <div class="thirdCol">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img src={ad} alt="ad" />
                    </a>
                </div>
            </div>
        </>
    );
}
export default SubjectDetailsPage;