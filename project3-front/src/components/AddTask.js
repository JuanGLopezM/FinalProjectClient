import { useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import { addNewResourceService } from '../services/resources.services';


function AddResource(props) {
	const [ title, setTitle ] = useState('');
	const [ description, setDescription ] = useState('');
	const [ isLoading, setIsLoading ] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();

		// We need the subject id when creating the new resource
		const { subjectId } = props;
		// Create an object representing the body of the POST request
		const requestBody = { title, description, subjectId };

		setIsLoading(true);
		try {
			await addNewResourceService(requestBody);
			// Reset the state to clear the inputs
			setTitle('');
			setDescription('');
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
				<label>Title:</label>
				<input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />

				<label>Description:</label>
				<textarea
					type="text"
					name="description"
					value={description}
					onChange={(e) => setDescription(e.target.value)}
				/>

				<button type="submit">Add Resource</button>
				{isLoading && <Spinner animation="grow" size="sm" />}
			</form>
		</div>
	);
}

export default AddResource;
