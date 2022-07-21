import React, { useState } from 'react';
import { updateResourceService, deleteResourceService } from '../services/resources.services';
function ResourceCard({ tags, source, _id }) {
    const [ inputTags, setInputTags ] = useState(tags);
    const [ inputSource, setImputSource ] = useState(source);
    const [ isDeleted, setIsDeleted ] = useState(false);
    const idResource = _id;
    const handleSubmitResource = async (e) => {
        try {
            const requestBody = { inputTags, inputSource };
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
                    <p>Resource</p>
                    <p>{idResource.tags}</p>
                    <input
                        value={inputTags}
                        onChange={(e) => {
                            setInputTags(e.target.value);
                        }}
                    />
                    <input
                        value={inputSource}
                        onChange={(e) => {
                            setImputSource(e.target.value);
                        }}
                    />
                    <button onClick={handleSubmitResource} class="btn btn-outline-primary">Edit</button>
                    <button onClick={handleDeleteResource} class="btn btn-outline-danger">Delete</button>
                </div>
            )}
        </div>
    );
}
export default ResourceCard;