import { useState } from 'react';
import { addNewSubjectService } from '../services/subject.services.js';
import * as React from 'react';

function AddSubject(props) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [tags, setTags] = useState('');
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
    <div >
      <hr></hr>
      <h3>Add New Subject</h3>
      <form onSubmit={handleSubmit}>
        <div class="form-row">
          <div class="col">
            <input type="text" name="title" class="form-control " placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div class="col">
            <input type="text" name="description" class="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
        </div>
        <button type="submit" class="btn btn-outline-info">Add</button>
      </form>
    </div>
  );
}
export default AddSubject;