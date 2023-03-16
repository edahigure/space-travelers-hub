import React from 'react';
import { useSelector } from 'react-redux';
import ProfileItem from '../components/ProfileItem'

export default function Profile() {
  const {
    rocketList,
  } = useSelector((store) => store.rocket);


  const myReservations = rocketList.filter((item) => item.reserved === true)
  const myRockets = [];
  for (let i = 0; i < myReservations.length; i += 1) {
    const str = `rocket${i}`;
    myRockets.push(<ProfileItem key={str} rocketName={myReservations[i].rocketName} />);
  }

  return (
    <div className="wrapper">
      <h2>My Rockets</h2>
      <div className="container-profile">
        {myRockets}
      </div>
    </div>
  )
}
