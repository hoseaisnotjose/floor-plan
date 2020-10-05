import React from 'react';
// import logo from './logo.svg';
import Kitchen from './Kitchen';
import LivingRoom from './LivingRoom';
import BedRoom from './BedRoom';
import Bath from './Bath';
import './App.css';

function FloorPlan(props) {
  return (
    <div>
      <Kitchen />
      <LivingRoom />
      <BedRoom type={'(main)'} />
      <Bath type={'(main)'} />
      <BedRoom type={'(Baby)'} />
      <BedRoom type={'(Guest)'} />
      <Bath type={'(Guest)'} />
    </div>
  );
}

export default FloorPlan;
