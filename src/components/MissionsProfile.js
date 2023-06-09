import React from 'react';
import { useSelector } from 'react-redux';

function MissionsProfile() {
  const missions = useSelector((state) => state.missions.missions);
  const reservedMissions = missions.filter((x) => x.reserved);
  return (
    <div className="reserve-container">
      <h1 className="profile-rockets-title">My Missions</h1>
      <div className="profile-rockets">
        {reservedMissions.length === 0 && <p className="no-reserve">No Mission Reserved</p>}
        {reservedMissions.map((x) => (
          <div key={x.mission_id} className="reserve-item">{x.mission_name}</div>
        ))}
      </div>
    </div>
  );
}

export default MissionsProfile;
