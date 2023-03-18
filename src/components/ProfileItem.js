import PropTypes from 'prop-types';
import React from 'react';

function ProfileItem(props) {
  const {
    rocketName,
  } = props;
  return (
    <div className="container-profile-item">
      {rocketName}
    </div>
  );
}

export default ProfileItem;

ProfileItem.propTypes = {
  rocketName: PropTypes.string,
};

ProfileItem.defaultProps = {
  rocketName: 'none',
};
