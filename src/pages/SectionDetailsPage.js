import { useState, useEffect } from 'react';
import { getSectionDetailsService } from '../services/section.services';
import EditSection from '../components/EditSection';
import { Link, useParams } from 'react-router-dom';
import AddResource from '../components/AddResource';
import ResourceCard from '../components/ResourceCard';
import ad from "../ad.png";
import SearchBar from '../components/SearchBar';
import SubjectData from "../Data.json";

function SectionDetailsPage(props) {
    const [section, setSection] = useState(null);
    const { id } = useParams();
    const sectionId = id;
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
        <SearchBar data={SubjectData} />
        </div>
		<div className="secondCol">
            {section && (
                <div className="ResourceCard card">
                    <h1>{section.title}</h1>
                 <p>Tags: {section.tags}</p>
                    {/* <p>Resources: {subject.resources}</p> */}
                </div>
            )}
            <EditSection setSection={setSection} SectionId={sectionId} refreshSection={getSection}/>
            <AddResource refreshSection={getSection} SectionId={sectionId} />
            {section &&
                section.resources.map((resource) => {
                    return <ResourceCard key={resource._id} {...resource} />;
                })}
            <Link to="/subjects">
                <button class="btn btn-outline-info">Back to Materials</button>
            </Link>
            </div>
            <div class="thirdCol">
          <img src={ad} alt="ad" />
          </div>
        </div>
    );
}
export default SectionDetailsPage;