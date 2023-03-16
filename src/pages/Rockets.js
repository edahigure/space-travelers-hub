import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchRockets } from '../redux/rockets/rocketsSlice';
import Rocket from '../components/Rocket'

export default function Rockets() {
  const dispatch = useDispatch();
  const {
    rocketList,
    status
  } = useSelector((store) => store.rocket);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchRockets());
    }
  }, [status, dispatch]);

  const myRockets = [];

  for (let i = 0; i < rocketList.length; i += 1) {
    const str = `rocket${i}`;
    myRockets.push(<Rocket
      key={str}
      id={rocketList[i].id}
      rocketName={rocketList[i].rocketName}
      description={rocketList[i].description}
      flickrImages={rocketList[i].flickrImages}
      reserved={rocketList[i].reserved}
    />);
  }


  return (
    <div className="listRockets">
      {myRockets}
    </div>
  )
}

