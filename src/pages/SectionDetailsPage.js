import { useState, useEffect, useContext } from 'react';
import { getSectionDetailsService } from '../services/section.services';
import EditSection from '../components/EditSection';
import { Link, useParams } from 'react-router-dom';
import AddResource from '../components/AddResource';
import EditResourceCard from '../components/EditResourceCard';
import ResourceCard from '../components/ResourceCard';
import ad from "../adAPIThieves.png";
import { AuthContext } from "./../context/auth.context";
// import SearchBar from '../components/SearchBar';
// import SubjectData from "../Data.json";
function SectionDetailsPage(props) {
    const [section, setSection] = useState(null);
    const { id } = useParams();
    const sectionId = id;
    const [searchTerm, SetSearchTerm] = useState('')
    const { user } = useContext(AuthContext);
    console.log("props", props)
    const getSection = async () => {
        localStorage.getItem('authToken');
        try {
            const response = await getSectionDetailsService(sectionId);
            setSection(response.data);
            console.log('section;', section)
        } catch (err) {
            console.log(err);
            console.log('hola mundo')
        }
    };
    useEffect(() => {
        getSection();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="wrapper">
            <div className="firstCol">
                {/* <SearchBar data={SubjectData} /> */}
                <div>
                    <input type="text" placeholder="Search" onChange={event => { SetSearchTerm(event.target.value) }} />
                </div>
                <br></br>
                <img src={ad} alt="ad" />
            </div>
            <div className="secondCol">
                {section && (
                    <div className="heading">
                        <br></br>
                        <br></br>
                        <h1><b>{section.title}</b></h1>
                        {/* <h5><b>Tags:</b> {section.tags}</h5> */}
                        {/* <p>Resources: {subject.resources}</p> */}
                        <br></br>
                    </div>
                )}
                {section &&
                    section.resources.filter((resourceSearched) => {
                        if (searchTerm == "") {
                            return resourceSearched
                        } else if (resourceSearched.title.toLowerCase().includes(searchTerm.toLowerCase())) {
                            return resourceSearched
                        }
                    }).map((resource) => {
                        return <ResourceCard key={resource._id} {...resource} />;
                    })}
                <br></br>
                {(user.email === 'Admin@gmail.com')
                    ? (<div><hr></hr><EditSection setSection={setSection} SectionId={sectionId} refreshSection={getSection} /></div>)
                    : (<></>)
                }
                <br></br>
                <br></br>
                {(user.email === 'Admin@gmail.com')
                    ? (<div><hr></hr><AddResource refreshSection={getSection} SectionId={sectionId} />
                        <br></br>
                        <br></br>
                        <h3>Edit/Delete Resource</h3>
                        {section &&
                            section.resources.map((resource) => {
                                return <EditResourceCard key={resource._id} {...resource} />;
                            })}
                    </div>)
                    : (<></>)
                }
                <br></br>
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
                <img src={ad} alt="ad" />
            </div>
        </div>
    );
}
export default SectionDetailsPage;