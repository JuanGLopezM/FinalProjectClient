import { useState } from 'react';
import { addNewSectionService } from '../services/section.services.js';
import { useParams } from 'react-router-dom';

function AddSection(props) {
    const [ title, setTitle ] = useState('');
    const [ tags, setTags ] = useState('');
    const { id } = useParams();
	const subjectId = id;
	console.log('ID:', subjectId)



    const handleSubmit = async (e) => {
        e.preventDefault();
        const newSubject = { title, tags, subjectId };
        // Send the token through the request "Authorization" Headers
        console.log('NEWSUBJECT:',newSubject)
        try {
            await addNewSectionService(newSubject);
            console.log('NEWSUBJECT:',newSubject);
            setTitle('');
            setTags('');
            props.refreshSubject();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="AddSubject">
            <h3>Add Section</h3>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Description:</label>
                <label>Tags:</label>
                <input type="text" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} />
                {/* <label>Resources:</label>
                <input type="text" name="resources" value={resources} onChange={(e) => setResources(e.target.value)} /> */}
                <button type="submit" class="btn btn-outline-info">Submit</button>
            </form>
        </div>
    );
}
export default AddSection;