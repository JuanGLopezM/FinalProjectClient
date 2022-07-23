import { useState } from 'react';
import { addNewResourceService } from '../services/resources.services';
import {useParams} from 'react-router-dom'

function AddResource(props) {
    const [ title, setTitle ] = useState('');
    const [ tags, setTags ] = useState('');
    const [ source, setSource ] = useState('');
    const { id }= useParams()
    const sectionId = id;
    
    
	const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = { title, tags, source, sectionId };
       
        
        try {
            await addNewResourceService(requestBody);
            setTitle('');
            setTags('');
            setSource('');
            props.refreshSection();
        } catch (err) {
            console.log(err);
            console.log('Por qué no podemos ser felices?');
        }
    };
    return (
        <div className="AddResource">
            <h3>Add New Resource</h3>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Tags:</label>
                <input type="text" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} />
                <label>Source:</label>
                <input type="text" name="source" value={source} onChange={(e) => setSource(e.target.value)}/>
                <button type="submit" class="btn btn-outline-info">Add Resource</button>
            </form>
        </div>
    );
}
export default AddResource;