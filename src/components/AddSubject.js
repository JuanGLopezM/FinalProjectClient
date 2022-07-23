import { useState } from 'react';
import { addNewSubjectService } from '../services/subject.services.js';
function AddSubject(props) {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ tags, setTags ] = useState('');

	const handleSubmit = async (e) => {
        e.preventDefault();
        const newSubject = { title, description, tags };
        
        try {
            await addNewSubjectService(newSubject);
            setTitle('');
            setDescription('');
            setTags('');
            props.refreshSubjects();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div className="AddSubject">
            <h3>Add Subject</h3>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Description:</label>
                <textarea
                    type="text"
                    name="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <label>Tags:</label>
                <input type="text" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} />
                {/* <label>Resources:</label>
                <input type="text" name="resources" value={resources} onChange={(e) => setResources(e.target.value)} /> */}
                <button type="submit" class="btn btn-outline-info">Submit</button>
            </form>
        </div>
    );
}
export default AddSubject;