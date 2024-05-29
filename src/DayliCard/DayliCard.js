import React from 'react';

import './DayliCard.css';

export const DayliCard = ({ dayliCard }) => {
  const { weather, dt } = dayliCard;
  const { main, icon } = weather[0];
  const { temp } = dayliCard.main;
  const currentDate = new Date(dt * 1000);

  return (
    <>
      <div className="daily-card">
        <div className="current-day">
          {currentDate.toString().split(' ')[0]}
        </div>
        <img
          className="icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <div className="temp">temp {Math.round(temp)}</div>
        <div className="descr">{main}</div>
      </div>
    </>
  );
};
