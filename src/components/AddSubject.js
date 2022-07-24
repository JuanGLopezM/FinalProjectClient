import { useState } from 'react';
import { addNewSubjectService } from '../services/subject.services.js';
import * as React from 'react';

function AddSubject(props) {
    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ tags, setTags ] = useState('');

	const handleSubmit = async (e) => {
        e.preventDefault();
        const newSubject = { title, description, tags };
        // Send the token through the request "Authorization" Headers
		console.log('NEWSUBJECT:',newSubject)
        try {
            await addNewSubjectService(newSubject);
			console.log('NEWSUBJECT:',newSubject)
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
        <h3>Add New Subject</h3>
        <form onSubmit={handleSubmit}>
          <div class="form-row">
            <div class="col">
              <input type="text"  name="title" class="form-control " placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div class="col">
              <input type="text" name="description" class="form-control" placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
            </div>
            <div class="col">
              <input type="text" name="tags" class="form-control" placeholder="Tags" value={tags} onChange={(e) => setTags(e.target.value)} />
            </div>
          </div>
          <button type="submit" class="btn btn-outline-info">Add</button>
        </form>
         
        {/* <form onSubmit={handleSubmit}>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Title" variant="standard" onChange={(e) => setTitle(e.target.value)}/>
      <TextField id="standard-basic" label="Description" variant="standard" onChange={(e) => setDescription(e.target.value)}/>
      <TextField id="standard-basic" label="tags" variant="standard" onChange={(e) => setTags(e.target.value)} />
    </Box>
    <Button variant="outlined" type="submit">Submit</Button>
    </form> */}
    
           
          {/*  #00FFFF
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
               <button type="submit" class="btn btn-outline-info">Submit</button>
            </form>   */}
        </div>
    );
}
export default AddSubject;