import React, { useState } from 'react';
function ProfileResourceCard({ title, tags, source, _id }) {
  // eslint-disable-next-line
  const [ inputTitle, setInputTitle ] = useState(title);
  // eslint-disable-next-line
  const [ inputTags, setInputTags ] = useState(tags);
  // eslint-disable-next-line
  const [ inputSource, setImputSource ] = useState(source);
  return (
    <div>
      <ul class="list-group">
        <li class="list-group-item list-group-item-info font-weight-bold">{inputTitle}</li>
        <li class="list-group-item list-group-item-light font-weight-light">{inputTags}</li>
        <a href={inputSource} rel="noreferrer" target="_blank" class="list-group-item list-group-item-action">{inputSource}</a>
        <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
            <label class="form-check-label" for="flexCheckDefault"> Completado </label>
        </div>
      </ul>
    </div>
  );
}
export default ProfileResourceCard;