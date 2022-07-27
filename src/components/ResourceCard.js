import React, { useState } from 'react';
import YoutubeEmbed from "./YoutubeEmbed";

function ResourceCard({ title, tags, source, _id }) {

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
      <br></br>
    </div>
  );
}
export default ResourceCard;