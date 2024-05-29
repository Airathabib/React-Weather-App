/* eslint-disable react/jsx-key */
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';

import { Card } from '../Card/Card';
import { useForecast } from '../hooks/useForecast';
// @ts-ignore
import { DayliCard } from '../DayliCard/DayliCard';

import './SingleCity.css';

export const SingleCity = () => {
  const [cityCoord, setCityCoord] = useState(null);
  const { city } = useParams();
  const data = useForecast(cityCoord);

  let arrFiveDays;
  const weatherData = [];
  if (data !== null) arrFiveDays = data.list;

  function fiveDay() {
    if (data !== null) {
      arrFiveDays.forEach((item) => {
        weatherData.push(item);
      });
      const days = [];
      for (let i = 0; i < weatherData.length; i = i + 8) {
        days.push(weatherData[i]);
      }
      return days;
    }
  }
  return (
    <>
      <div className=" single--city-wrap">
        <Link to="/home" className="single--city--goback">
          На главную
        </Link>
        <Card city={city} setCityCoord={setCityCoord} />
        {data && (
          <div className="daily-cards">
            {fiveDay().map((dayliCard) => (
              <DayliCard dayliCard={dayliCard} key={dayliCard.dt} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
