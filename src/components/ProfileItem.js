import React from 'react'

function ProfileItem(props) {
  const {
    rocketName,
  } = props;
  return (
    <div className="container-profile-item">
      {rocketName}
    </div>
  )
}

export default ProfileItem
