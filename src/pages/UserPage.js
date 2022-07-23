import { Divider } from '@mui/material';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import AddResource from '../components/AddResource';
import ResourceCard from '../components/ResourceCard';
import { getUserService } from '../services/subject.services'; //por hacer
function UserPage (props){
    const [user, setUser] = useState(null);
    const { id } = useParams();
    const userId = id;
    const getUser = async () => {
        localStorage.getItem('authToken');
        try {
            const response = await getUserService(id);
            setUser(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getUser();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div>{user.name}</div>
            <h3>Pending:</h3>
            {user &&
                user.pendingResources.map((pResource) => {
                    return <ResourceCard key={pResource._id} {...pResource} />;
            })}
            <AddResource refreshUser={getUser} UserId={userId} />
            <h3>Completed:</h3>
            {user &&
                user.completedResources.map((cResource) => {
                    return <ResourceCard key={cResource._id} {...cResource} />;
            })}
        </>
    )
}
export default UserPage;