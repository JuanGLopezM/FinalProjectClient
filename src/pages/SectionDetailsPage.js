import { useState, useEffect, useContext } from 'react';
import { getSectionDetailsService } from '../services/section.services';
import EditSection from '../components/EditSection';
import { Link, useParams } from 'react-router-dom';
import AddResource from '../components/AddResource';
import EditResourceCard from '../components/EditResourceCard';
import ResourceCard from '../components/ResourceCard';
import ad from "../adAPIThieves.png";
import { AuthContext } from "./../context/auth.context";

function SectionDetailsPage(props) {
    const [section, setSection] = useState(null);
    const { id } = useParams();
    const sectionId = id;
    const [searchTerm, SetSearchTerm] = useState('')
    const { user } = useContext(AuthContext);
    const getSection = async () => {
        localStorage.getItem('authToken');
        try {
            const response = await getSectionDetailsService(sectionId);
            setSection(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getSection();
        // eslint-disable-next-line
    }, []);
    return (
        <div className="wrapper">
            <div className="firstCol">
                <div>
                    <input type="text" placeholder="Search" onChange={event => { SetSearchTerm(event.target.value) }} />
                </div>
                <br></br>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                    <img src={ad} alt="ad" />
                </a>
            </div>
            <div className="secondCol">
                {section && (
                    <div className="heading">
                        <br></br>
                        <br></br>
                        <h1><b>{section.title}</b></h1>
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
                    ?(<div><hr></hr><EditSection setSection={setSection} SectionId={sectionId} refreshSection={getSection} /></div>)
                    :(<></>)
                }
                <br></br>
                <br></br>
                {(user.email === 'Admin@gmail.com')
                    ?(<div><hr></hr><AddResource refreshSection={getSection} SectionId={sectionId} />
                        <br></br>
                        <br></br>
                        <h3>Edit/Delete Resource</h3>
                        {section &&
                            section.resources.map((resource) => {
                                return <EditResourceCard key={resource._id} {...resource} />;
                            })}
                    </div>)
                    :(<></>)
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
                <a href="https://google.com" target="_blank" rel="noreferrer">
                    <img src={ad} alt="ad" />
                </a>
            </div>
        </div>
    );
}
export default SectionDetailsPage;