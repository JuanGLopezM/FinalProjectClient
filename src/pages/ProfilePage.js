// eslint-disable-next-line
import { Divider } from '@mui/material';
import { useState, useEffect } from 'react';
// eslint-disable-next-line
import { Link, useParams } from 'react-router-dom';
import AddResource from '../components/AddResource';
import ResourceCard from '../components/ResourceCard';
import { getProfileDetailsService } from '../services/profile.services';

function ProfilePage (props){
    const [profile, setProfile] = useState(null);
    const getProfile = async () => {
        localStorage.getItem('authToken');
        try {
            const response = await getProfileDetailsService();
            console.log(response)
            setProfile(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getProfile();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <h3>Perfil</h3>
            {profile &&
                profile.pending.map((pResource) => {
                    return <ResourceCard key={pResource._id} {...pResource} />;

            })}
            <AddResource refreshUser={getProfile} /> 
        </>
    )
}
export default ProfilePage;