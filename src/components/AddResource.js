import { useState } from 'react';
// import Spinner from 'react-bootstrap/Spinner';
import { addNewResourceService } from '../services/resources.services';
import {useParams} from 'react-router-dom'

function AddResource(props) {
	const [ title, setTitle ] = useState('');
	const [ tags, setTags ] = useState('');
	const [ source, setSource ] = useState('');
	
	const {id}= useParams()
	const sectionId = id;
	console.log('ID:', sectionId)

	const handleSubmit = async (e) => {
		e.preventDefault();

		// We need the subject id when creating the new resource
		// const { subjectId } = props;
		// console.log(subjectId)
		// Create an object representing the body of the POST request
		const requestBody = { title, tags, source, sectionId };
		console.log(requestBody)

		
		try {
			await addNewResourceService(requestBody);
			// Reset the state to clear the inputs
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
          <div class="form-row">
		  <div class="col">
              <input type="text" name="title" class="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
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
{/* 
			<form onSubmit={handleSubmit}>
				<label>Tags:</label>
				<input type="text" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} />

				<label>Source:</label>
				<textarea
					type="text"
					name="source"
					value={source}
					onChange={(e) => setSource(e.target.value)}
				/>

				<button type="submit" class="btn btn-outline-info">Add Resource</button>
				
			</form> */}
	
		</div>
	);
}
// {isLoading && <Spinner animation="grow" size="sm" />}

export default AddResource;
