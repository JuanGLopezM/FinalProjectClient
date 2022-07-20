import { useState, useEffect } from 'react';
import AddSubject from '../components/AddSubject';
import SubjectCard from '../components/SubjectCard';
import { getAllSubjectsService } from '../services/subject.services';

function SubjectListPage() {
	const [ subjects, setSubjects ] = useState([]);
	const [ loading, setLoading ] = useState(true);

	const getAllSubjects = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllSubjectsService();
			setSubjects(response.data);
			setLoading(false);
		} catch (err) {
			console.log(err);
		}
	};

	// We set this effect will run only once, after the initial render
	// by setting the empty dependency array - []
	useEffect(() => {
		getAllSubjects();
	}, []);

	return (
		<div className="SubjectListPage">
		    <AddSubject refreshSubjects={getAllSubjects} />

			{loading && <div>Loading...</div>}
			 { !loading && subjects.map((subject) => <SubjectCard key={subject._id} {...subject} />  )}  
		</div>
	);
}

export default SubjectListPage;

