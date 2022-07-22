import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { addNewResourceService } from '../services/resources.services';
import {useParams} from 'react-router-dom'

function AddResource(props) {
	const [ tags, setTags ] = useState('');
	const [ source, setSource ] = useState('');
	const [ isLoading, setIsLoading ] = useState(false);
	const {id}= useParams()
	const sectionId = id;
	console.log('ID:', sectionId)

	const handleSubmit = async (e) => {
		e.preventDefault();

		// We need the subject id when creating the new resource
		// const { subjectId } = props;
		// console.log(subjectId)
		// Create an object representing the body of the POST request
		const requestBody = { tags, source, sectionId };
		console.log(requestBody)

		setIsLoading(true);
		try {
			await addNewResourceService(requestBody);
			// Reset the state to clear the inputs
			setTags('');
			setSource('');
			setIsLoading(false);
			props.refreshSubject();
		} catch (err) {
			console.log(err);
			console.log('Por qué no podemos ser felices?');
		}
	};

	return (
		<div className="AddResource">
			<h3>Add New Resource</h3>

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
				{isLoading && <Spinner animation="grow" size="sm" />}
			</form>
		</div>
	);
}

export default AddResource;
