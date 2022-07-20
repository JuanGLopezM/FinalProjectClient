import React, { useState } from 'react';

import { updateResourceService, deleteResourceService } from '../services/resources.services';

function ResourceCard({ title, description, _id }) {
	const [ inputTitle, setInputTitle ] = useState(title);
	const [ inputDescription, setInputDescription ] = useState(description);
	const [ isDeleted, setIsDeleted ] = useState(false);
	const idResource = _id;

	const handleSubmitResource = async (e) => {
		try {
			const requestBody = { inputTitle, inputDescription };

			await updateResourceService(idResource, requestBody);
		} catch (err) {
			console.log(err);
		}
	};

	const handleDeleteResource = async (e) => {
		try {
			await deleteResourceService(idResource);
			setIsDeleted(true);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div>
			{!isDeleted && (
				<div className="ResourceCard card">
					<p>Resource</p>
					<input
						value={inputTitle}
						onChange={(e) => {
							setInputTitle(e.target.value);
						}}
					/>
					<input
						value={inputDescription}
						onChange={(e) => {
							setInputDescription(e.target.value);
						}}
					/>
					<button onClick={handleSubmitResource}>Modificar</button>
					<button onClick={handleDeleteResource}>Eliminar</button>
				</div>
			)}
		</div>
	);
}

export default ResourceCard;
