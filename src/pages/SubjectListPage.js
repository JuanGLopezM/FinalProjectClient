import { useState, useEffect } from 'react';
import React from "react";
import AddSubject from '../components/AddSubject';
import SubjectCard from '../components/SubjectCard';
import { getAllSubjectsService } from '../services/subject.services';
// import SearchBar from '../components/SearchBar';
// import SubjectData from "../Data.json";
import whatLogo from "../whatLogo.png";
import ad from "../adAPIThieves.png";
function SubjectListPage() {
    const [ subjects, setSubjects ] = useState([]);
    const [ loading, setLoading ] = useState(true);
     // eslint-disable-next-line
     const [ filter , setFilter ] = useState([]);
     const [searchTerm, SetSearchTerm] = useState('')
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
          <div className="wrapper">
          <div className="firstCol">
          {/* <SearchBar data={SubjectData} /> */}
            <div>
                <input type="text" placeholder="Search" onChange={event => {SetSearchTerm(event.target.value)}}/>
            </div>
            <br></br>
            <img src={ad} alt="ad" />
          </div>
          <div className="secondCol">
          <br></br>
          <br></br>
          <br></br>
          <img src={whatLogo} alt="Logo" />
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div className="row">
              {loading && <div>Loading...</div>}
              { !loading && subjects.filter((subjectSearched)=>{
                if(searchTerm == "" ) {
                    return subjectSearched
                }else if(subjectSearched.title.toLowerCase().includes(searchTerm.toLowerCase())){
                    return subjectSearched
                }
              }).map((subject) => {
                return <SubjectCard key={subject._id} {...subject} />
              }
              )}
          </div>
          <br></br>
          <br></br>
          <br></br>
          <AddSubject refreshSubjects={getAllSubjects} />
          </div>
          <div class="thirdCol">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <img src={ad} alt="ad" />
          </div>
          </div>
    );
}
export default SubjectListPage;