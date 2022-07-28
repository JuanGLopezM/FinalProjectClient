import { useState } from 'react';
import { addNewResourceService } from '../services/resources.services';
import {useParams} from 'react-router-dom'

function AddResource(props) {
    const [ title, setTitle ] = useState('');
    const [ tags, setTags ] = useState('');
    const [ source, setSource ] = useState('');
    const {id}= useParams()
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
        }
    };
    return (
        <div>
            <h3>Add New Resource</h3>
            <form onSubmit={handleSubmit}>
                <div class="form-row">
                    <div class="col">
                        <input type="text" name="title" class="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div class="col">
                        <input type="text"  name="source" class="form-control " placeholder="Source" value={source} onChange={(e) => setSource(e.target.value)} />
                    </div>
                </div>
                <button type="submit" class="btn btn-outline-info">Add</button>
            </form>
        </div>
    );
}
export default AddResource;