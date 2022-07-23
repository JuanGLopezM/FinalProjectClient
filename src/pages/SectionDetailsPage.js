import { useState, useEffect } from 'react';
import { getSectionDetailsService } from '../services/section.services';
import EditSection from '../components/EditSection';
import { Link, useParams } from 'react-router-dom';
import AddResource from '../components/AddResource';
import ResourceCard from '../components/ResourceCard';
function SectionDetailsPage(props) {
    const [section, setSection] = useState(null);
    const { id } = useParams();
    const sectionId = id;
    
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
        <div className="ProjectDetails">
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
    );
}
export default SectionDetailsPage;