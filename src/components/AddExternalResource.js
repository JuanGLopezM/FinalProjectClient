import { useState } from 'react';
//Cambiar servicio
import { addNewExternalResourceService } from '../services/resources.services';


function AddExternalResource(props) {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ tags, setTags ] = useState('');
    const [ source, setSource ] = useState('');
    // const {id}= useParams()
 
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        const requestBody = { title, description, tags, source };
        try {
            await addNewExternalResourceService(requestBody);
            // Reset the state to clear the inputs
            setTitle('');
            setDescription('');
            setTags('');
            setSource('');
            props.getProfile();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="AddResource">
            <h3>Add New Resource</h3>
            <form onSubmit={handleSubmit}>
                <div class="form-row">
                    <div class="col">
                        <input type="text" name="title" class="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div class="col">
                        <input type="text" name="description" class="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
                    </div>
                    <div class="col">
                        <input type="text" name="tags" class="form-control" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} />
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
export default AddExternalResource;