import { useState, useEffect } from 'react';
import { getSubjectDetailsService } from '../services/project.services';

import { Link, useParams } from 'react-router-dom';
import AddTask from '../components/AddTask';
import TaskCard from '../components/TaskCard';

function SUbjectDetailsPage(props) {
	const [ subject, setSubject ] = useState(null);
	const { id } = useParams();
	const subjectId = id;

	const getSubject = async () => {
		localStorage.getItem('authToken');
		try {
			const response = await getSubjectDetailsService(id);
			setSubject(response.data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		getSubject();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="SubjectDetails">
			{subject && (
				<div>
					<h1>Subject: {subject.title}</h1>
					<p>Description: {subject.description}</p>
				</div>
			)}

			<AddTask refreshSubject={getSubject} SubjectId={subjectId} />

			{subject &&
				subject.tasks.map((task) => {
					return <TaskCard key={task._id} {...task} />;
				})}
	        									
			<Link to="/subjects">
				<button>Back to subjects</button>
			</Link>
		</div>
	);
}

export default SUbjectDetailsPage;
