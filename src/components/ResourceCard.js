import React, { useState , useContext } from 'react';
import YoutubeEmbed from "./YoutubeEmbed";
import { AuthContext } from "./../context/auth.context";
import { addNewProfileService } from '../services/profile.services';

function ResourceCard({ title, tags, source, _id }) {
  const { user } = useContext(AuthContext);
  const idResource = _id;
  // eslint-disable-next-line
  const [ inputTitle, setInputTitle ] = useState(title);
  // eslint-disable-next-line
  const [ inputTags, setInputTags ] = useState(tags);
  // eslint-disable-next-line
  const [ inputSource, setImputSource ] = useState(source);
  
  function Beer(a) {
    let result = a.split('v=')[1];
    return result 
    }
  
    function YT(a,b) {
      if (a.includes(b)) { 
        return true
      }
    }

    const handleAddFavorite = async (e) => {
      try {
          const requestBody = { user, idResource };
          console.log('USER:', user)
          await addNewProfileService(requestBody);
      } catch (err) {
          console.log(err);
      }
  };

  return (
    <div>
      <ul class="list-group">
        <li class="list-group-item list-group-item-warning font-weight-bold">{inputTitle}</li>
        {/* <li class="list-group-item list-group-item-light font-weight-light">{inputTags}</li> */}
        {/* <a href={inputSource} rel="noreferrer" target="_blank" class="list-group-item list-group-item-action">{inputSource}</a> */}
        {(YT(inputSource,'youtube'))
        ?(<li class="list-group-item list-group-item-light font-weight-light"> <YoutubeEmbed embedId={Beer(inputSource)}/> </li>) 
        :(<li class="list-group-item list-group-item-light font-weight-light">{inputSource}</li>)
        } 
      </ul>
      <button onClick={handleAddFavorite} class="btn btn-outline-primary">Add to Profile</button>
      <br></br>
    </div>
  );
}
export default ResourceCard;