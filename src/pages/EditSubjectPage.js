// import { useState, useEffect } from "react";
// import axios from "axios";

// const API_URL = process.env.REACT_APP_API_URL;

// function EditSubjectPage(props) {
//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const subjectId = props.match.params.id;
  
  
//   useEffect(() => {
//     // Get the token from the localStorage
//     const storedToken = localStorage.getItem('authToken');
    
//     // Send the token through the request "Authorization" Headers 
//     axios
//       .get(
//         `${API_URL}/subjects/${subjectId}`,
//         { headers: { Authorization: `Bearer ${storedToken}` } }    
//       )
//       .then((response) => {
//         const oneSubject = response.data;
//         setTitle(oneSubject.title);
//         setDescription(oneSubject.description);
//       })
//       .catch((error) => console.log(error));
    
//   }, [subjectId]);
  

//   const handleFormSubmit = (e) => {
//     e.preventDefault();
//     const requestBody = { title, description };
  
//     // Get the token from the localStorage
//     const storedToken = localStorage.getItem('authToken');  

//     // Send the token through the request "Authorization" Headers   
//     axios
//       .put(
//         `${API_URL}/subjects/${subjectId}`,
//         requestBody,
//         { headers: { Authorization: `Bearer ${storedToken}` } }              
//       )
//       .then((response) => {
//         props.history.push(`/subjects/${subjectId}`)
//       });
//   };
  
  
//   const deleteSubject = () => {
//     // Get the token from the localStorage
//     const storedToken = localStorage.getItem('authToken');      
    
//     // Send the token through the request "Authorization" Headers   
//     axios
//       .delete(
//         `${API_URL}/subjects/${subjectId}`,
//         { headers: { Authorization: `Bearer ${storedToken}` } }           
//       )
//       .then(() => props.history.push("/subjects"))
//       .catch((err) => console.log(err));
//   };  

  
//   return (
//     <div className="EditSubjectPage">
//       <h3>Edit the Subject</h3>

//       <form onSubmit={handleFormSubmit}>
//         <label>Title:</label>
//         <input
//           type="text"
//           name="title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
        
//         <label>Description:</label>
//         <textarea
//           name="description"
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//         />

//         <button type="submit">Update Subject</button>
//       </form>

//       <button onClick={deleteSubject}>Delete Subject</button>
//     </div>
//   );
// }

// export default EditSubjectPage;