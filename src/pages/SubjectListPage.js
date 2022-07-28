import { useState, useEffect, useContext } from 'react';
import React from "react";
import { AuthContext } from "./../context/auth.context";
import AddSubject from '../components/AddSubject';
import SubjectCard from '../components/SubjectCard';
import { getAllSubjectsService } from '../services/subject.services';
import ad from "../adAPIThieves.png";

function SubjectListPage() {
    const [ subjects, setSubjects ] = useState([]);
    const [ loading, setLoading ] = useState(true);
    // eslint-disable-next-line
    const [ filter , setFilter ] = useState([]);
    const [searchTerm, SetSearchTerm] = useState('')
    const { user } = useContext(AuthContext);
    const getAllSubjects = async () => {
        try {
            const response = await getAllSubjectsService();
            setSubjects(response.data);
            setLoading(false);
               setFilter(response.data)
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getAllSubjects();
    }, []);
    return (
            <div className="wrapper">
                <div className="firstCol">
                    <div>
                        <input type="text" placeholder="Search" onChange={event => {SetSearchTerm(event.target.value)}}/>
                    </div>
                    <br></br>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img src={ad} alt="ad" />
                    </a>
                </div>
                <div className="secondCol">
                <br></br>
                <br></br>
                    <div className="heading">
                        <h1><b>What do you want to learn today?</b></h1>
                    </div>
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
                {(user.email === 'Admin@gmail.com')
                    ?(<AddSubject refreshSubjects={getAllSubjects} />)
                    :(<></>)
                }
            </div>
            <div class="thirdCol">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
                <a href="https://google.com" target="_blank" rel="noreferrer">
                    <img src={ad} alt="ad" />
                </a>
            </div>
        </div>
    );
}
export default SubjectListPage;