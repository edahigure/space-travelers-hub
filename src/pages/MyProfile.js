import React from 'react';
import MissionsProfile from '../components/MissionsProfile';
import ProfileRocket from '../components/ProfileRocket';

function MyProfile() {
  return (
    <div>

      <div className="profile-container">
        <ProfileRocket />
        <MissionsProfile />
      </div>

    </div>
  );
}

export default MyProfile;
