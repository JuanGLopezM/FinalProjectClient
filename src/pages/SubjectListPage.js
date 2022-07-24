import { useState, useEffect } from 'react';
import React from "react";
import AddSubject from '../components/AddSubject';
import SubjectCard from '../components/SubjectCard';
import { getAllSubjectsService } from '../services/subject.services';
<<<<<<< Updated upstream
=======
import whatLogo from "../whatLogo.png";
>>>>>>> Stashed changes

function SubjectListPage() {
	const [ subjects, setSubjects ] = useState([]);
	const [ loading, setLoading ] = useState(true);
     // eslint-disable-next-line
     const [ filter , setFilter ] = useState([]);

	const getAllSubjects = async () => {
		// Send the token through the request "Authorization" Headers
		try {
			const response = await getAllSubjectsService();
			setSubjects(response.data);
			setLoading(false);
               setFilter(response.data)
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
        <div className="subjectListPage">
        <br></br>
        <br></br>
        <br></br>
        <img src={whatLogo} alt="Logo" />
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

