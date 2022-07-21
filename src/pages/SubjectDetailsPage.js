import { useState, useEffect } from 'react';
import { getSubjectDetailsService } from '../services/subject.services';
import EditSubject from '../components/EditSubject';
import { Link, useParams } from 'react-router-dom';
import AddResource from '../components/AddResource';
import ResourceCard from '../components/ResourceCard';

function SubjectDetailsPage(props) {
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
			console.log('hola mundo')
		}
	};

	useEffect(() => {
		getSubject();
		// eslint-disable-next-line
	}, []);

	return (
		<div className="ProjectDetails">
			{subject && (
				<div className="ResourceCard card">
				
					<h1>{subject.title}</h1>
					<p>Description: {subject.description}</p>
					<p>Tags: {subject.tags}</p>
					{/* <p>Resources: {subject.resources}</p> */}
				</div>
			)}
			<EditSubject setSubject= {setSubject}   SubjectId={subjectId} />

			<AddResource refreshSubject={getSubject} SubjectId={subjectId} />

			{subject &&
				subject.resources.map((resource) => {
					return <ResourceCard key={resource._id} {...resource} />;
				})}
	        									
			<Link to="/subjects">
				<button class="btn btn-outline-info">Back to subjects</button>
			</Link>
		</div>
	);
}

export default SubjectDetailsPage;
