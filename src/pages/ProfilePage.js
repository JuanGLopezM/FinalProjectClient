// eslint-disable-next-line
import { Divider } from '@mui/material';
import { useState, useEffect } from 'react';
// eslint-disable-next-line
import { Link, useParams } from 'react-router-dom';
import AddResource from '../components/AddResource';
import ResourceCard from '../components/ResourceCard';
import { getFavoritesDetailsService } from '../services/favorite.services';

function ProfilePage (props){
    const [favorites, setFavorites] = useState(null);
    const getFavorites = async () => {
        localStorage.getItem('authToken');
        try {
            const response = await getFavoritesDetailsService();
            console.log(response)
            setFavorites(response.data);
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        getFavorites();
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <h3>Perfil</h3>
          
            {favorites &&
                favorites.pending.map((pResource) => {
                    return <ResourceCard key={pResource._id} {...pResource} />;
                    
            })}
            <AddResource refreshUser={getFavorites} /> 
        </>
    )
}
export default ProfilePage;