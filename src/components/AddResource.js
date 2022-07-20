import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { addNewResourceService } from '../services/resources.services';


function AddResource(props) {
	const [ tags, setTags ] = useState('');
	const [ source, setSource ] = useState('');
	const [ isLoading, setIsLoading ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// We need the subject id when creating the new resource
		const { subjectId } = props;
		// Create an object representing the body of the POST request
		const requestBody = { tags, source, subjectId };

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
		}
	};

	return (
		<div className="AddResource">
			<h3>Add New Resource</h3>

			<form onSubmit={handleSubmit}>
				<label>Tags:</label>
				<input type="text" name="title" value={tags} onChange={(e) => setTags(e.target.value)} />

				<label>Source:</label>
				<textarea
					type="text"
					name="description"
					value={source}
					onChange={(e) => setSource(e.target.value)}
				/>

				<button type="submit">Add Resource</button>
				{isLoading && <Spinner animation="grow" size="sm" />}
			</form>
		</div>
	);
}

export default AddResource;
