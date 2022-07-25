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
        <div >
            <h3>Add New Section</h3>
            {/* <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
                <label>Tags:</label>
                <input type="text" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} />
                <button type="submit" class="btn btn-outline-info">Submit</button>
            </form> */}
            <form onSubmit={handleSubmit}>
          <div class="form-row">
            <div class="col">
              <input type="text"  name="title" class="form-control " placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div class="col">
              <input type="text" name="tags" class="form-control" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} />
            </div>
          </div>
          <button type="submit" class="btn btn-outline-info">Add</button>
        </form>
        </div>
    );
}
export default AddSection;