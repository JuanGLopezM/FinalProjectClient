import React, { useState } from 'react';

function ResourceCard({ title, tags, source, _id }) {
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
        <a href={inputSource} class="list-group-item list-group-item-action">{inputSource}</a>
      </ul>
    </div>
  );
}
export default ResourceCard;
