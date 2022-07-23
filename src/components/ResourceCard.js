import React, { useState } from 'react';
import { updateResourceService, deleteResourceService } from '../services/resources.services';
function ResourceCard({ title, tags, source, _id }) {
    const [ inputTitle, setInputTitle ] = useState(title);
    const [ inputTags, setInputTags ] = useState(tags);
    const [ inputSource, setImputSource ] = useState(source);
    const [ isDeleted, setIsDeleted ] = useState(false);
    const idResource = _id;
    
    const handleEditResource = async (e) => {
        try {
            const requestBody = { inputTitle, inputTags, inputSource };
            await updateResourceService(idResource, requestBody);
        } catch (err) {
            console.log(err);
        }
    };
    const handleDeleteResource = async (e) => {
        try {
            await deleteResourceService(idResource);
            setIsDeleted(true);
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <div>
            {!isDeleted && (
                <div className="ResourceCard card">
                    <h4>Resource</h4>
                    <h5>Title: {inputTitle}</h5>
                    <h5>Tags: {inputTags}</h5>
                    <h5>Source: {inputSource}</h5>
                    <p>Title: </p>
                    <input
                        value={inputTitle}
                        onChange={(e) => {
                            setInputTitle(e.target.value);
                        }}
                    />
                    <br></br>
                    <p>Tags: </p>
                    <input
                        value={inputTags}
                        onChange={(e) => {
                            setInputTags(e.target.value);
                        }}
                    />
                    <br></br>
                    <p>Source: </p>
                    <input
                        value={inputSource}
                        onChange={(e) => {
                            setImputSource(e.target.value);
                        }}
                    />
                    <button onClick={handleEditResource} class="btn btn-outline-primary">Edit</button>
                    <button onClick={handleDeleteResource} class="btn btn-outline-danger">Delete</button>
                </div>
            )}
        </div>
    );
}
export default ResourceCard;