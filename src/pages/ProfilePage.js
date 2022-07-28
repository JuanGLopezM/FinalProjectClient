import { useState, useEffect } from 'react';
import ad from "../adAPIThieves.png";
import AddExternalResource from '../components/AddExternalResource';
import ProfileResourceCard from '../components/ProfileResourceCard';
import ResourceCard2 from '../components/ResourceCard2';
import { getProfileDetailsService } from '../services/profile.services';

function ProfilePage(props) {
    const [profile, setProfile] = useState(null);
    const getProfile = async () => {
        localStorage.getItem('authToken');
        try {
            const response = await getProfileDetailsService();
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
            <div className="wrapper">
                <div className="firstCol">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img src={ad} alt="ad" />
                    </a>
                </div>
                <div className="secondCol">
                    <br></br>
                    <br></br>
                    <div className="heading">
                        <h3><b>List of materials:</b></h3>
                    </div>
                    <br></br>
                    {profile &&
                        profile.pending.map((pResource) => {
                            return (
                                <>
                                    <ResourceCard2 key={pResource._id} {...pResource} getProfile={getProfile} />
                                </>
                            )
                        })}
                    {profile &&
                        profile.pendingExternal.map((pResource) => {
                            return (
                                <>
                                    <ProfileResourceCard key={pResource._id} {...pResource} getProfile={getProfile} />
                                </>
                            )
                        })}
                    <hr></hr>
                    <AddExternalResource getProfile={getProfile} />
                </div>
                <div class="thirdCol">
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <a href="https://google.com" target="_blank" rel="noreferrer">
                        <img src={ad} alt="ad" />
                    </a>
                </div>
            </div>
        </>
    )
}

export default ProfilePage;