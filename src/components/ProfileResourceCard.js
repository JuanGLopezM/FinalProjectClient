import React, { useState } from 'react';
import { deleteProfileDetailsService } from '../services/profile.services';
import YoutubeEmbed from "./YoutubeEmbed";

function ProfileResourceCard({ title, description, tags, source, _id, getProfile }) {
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

  function YT(a, b) {
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
        {(YT(inputSource, 'youtube'))
          ? (<li class="list-group-item list-group-item-light font-weight-light"> <YoutubeEmbed embedId={Beer(inputSource)} /> </li>)
          : (<a href={inputSource} target="_blank" rel="noreferrer" class="list-group-item list-group-item-light font-weight-light">{inputSource}</a>)
        }
      </ul>
      <button onClick={handleDeleteFavorite} class="btn btn-outline-danger">Delete</button>
      <br></br>
      <br></br>
    </div>
  );
}
export default ProfileResourceCard;