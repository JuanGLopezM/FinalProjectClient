import { useState } from 'react';
import { addNewSectionService } from '../services/section.services.js';
import { useParams } from 'react-router-dom';

function AddSection(props) {
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState('');
  const { id } = useParams();
  const subjectId = id;
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newSubject = { title, tags, subjectId };

    try {
      await addNewSectionService(newSubject);
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
      <form onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="col">
            <input type="text" name="title" class="form-control " placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
        </div>
        <button type="submit" class="btn btn-outline-info">Add</button>
      </form>
    </div>
  );
}
export default AddSection;