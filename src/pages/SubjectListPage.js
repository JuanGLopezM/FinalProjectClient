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
        <div>
        <br></br>
        <br></br>
        <br></br>
        <h1>What do you want to learn today?</h1>
        <br></br>
        <br></br>
        <br></br>
        <h2>MERN</h2>
        <br></br>
        <div className="row">
        {loading && <div>Loading...</div>}
             { !loading && subjects.map((subject) => <SubjectCard key={subject._id} {...subject} />  )}
        </div>
        <br></br>
        <br></br>
        <br></br>
             <AddSubject refreshSubjects={getAllSubjects} />
        </div>
    );
}

export default SubjectListPage;

