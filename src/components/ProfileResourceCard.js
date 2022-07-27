import React, { useState } from 'react';
import { deleteProfileDetailsService } from '../services/profile.services';
import YoutubeEmbed from "./YoutubeEmbed";

function ProfileResourceCard({ title, description, tags, source, _id, getProfile }) {
 
  // 
  const idResource = _id;
  // eslint-disable-next-line
  const [inputTitle, setInputTitle] = useState(title);
    // eslint-disable-next-line
  const [inputDescription, setInputDescription] = useState(description);
  // eslint-disable-next-line
  const [inputTags, setInputTags] = useState(tags);
  // eslint-disable-next-line
  const [inputSource, setImputSource] = useState(source);

  function Beer(a) {
    let result = a.split('v=')[1];
    return result 
    }
  
    function YT(a,b) {
      if (a.includes(b)) { 
        return true
      }
    }

  const handleDeleteFavorite = async (e) => {
    try {
      await deleteProfileDetailsService(idResource);
      console.log('Hijo')
      getProfile()
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div>
      <ul class="list-group">
        <li class="list-group-item list-group-item-warning font-weight-bold">{inputTitle}</li>
        <li class="list-group-item list-group-item-light font-weight-light">{inputDescription}</li>
        {/* <li class="list-group-item list-group-item-light font-weight-light">{inputTags}</li> */}
        {/* <a href={inputSource} rel="noreferrer" target="_blank" class="list-group-item list-group-item-action">{inputSource}</a> */}
        {(YT(inputSource,'youtube'))
        ?(<li class="list-group-item list-group-item-light font-weight-light"> <YoutubeEmbed embedId={Beer(inputSource)}/> </li>) 
        :(<li class="list-group-item list-group-item-light font-weight-light">{inputSource}</li>)
        } 
        {/* <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label class="form-check-label" for="flexCheckDefault"> Completado </label>
        </div> */}
      </ul>
      <button onClick={handleDeleteFavorite} class="btn btn-outline-danger">Delete from profile</button>
      <br></br>
      <br></br>
    </div>
  );
}
export default ProfileResourceCard;