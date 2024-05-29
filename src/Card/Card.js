import React, { memo, useContext, useEffect } from 'react';
import { Link, useMatch } from 'react-router-dom';

import { GlobalContext } from '../App';
import { useWeather } from '../hooks/useWeather';
// import { useCurrentPosition } from '../hooks/useCurrentposition';

import './Card.css';
const CardNoMemo = ({ city, setCityCoord }) => {
  const data = useWeather(city);

  const { dispatch } = useContext(GlobalContext);
  useEffect(() => {
    if (data && data.coord.lat && data.coord.lon && setCityCoord) {
      setCityCoord({
        lat: data.coord.lat,
        lon: data.coord.lon,
      });
    }
  }, [data, setCityCoord]);

  const isHome = Boolean(useMatch('/home'));

  const handleOnDelete = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({
      type: 'DELETE_CITY',
      payload: city,
    });
  };

  const handleOnEdit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    dispatch({
      type: 'EDIT_CITY',
      payload: city,
    });
  };
  // const handleOnLinkClick = () => {
  //   dispatch({
  //     type: 'EDIT_CITY_DONE',
  //     payload: city,
  //   });
  // };

  if (data === null) {
    return (
      <div className="card">
        <div className="action--button-wrapper">
          <button className="action-button" onClick={handleOnEdit}>
            edit
          </button>

          <button className="action-button" onClick={handleOnDelete}>
            X
          </button>
        </div>

        <div className="main--info">
          <div className="title">{city}</div>
          <div className="description">Не найдено</div>
        </div>
      </div>
    );
  }

  if (!data) return null;
  const { name, weather, main } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  if (isHome) {
    return (
      <Link
        to={`/city/${city.toLowerCase()}`}
        // onClick={handleOnLinkClick}
        className="card">
        <div className="action--button-wrapper">
          <button className="action-button" onClick={handleOnEdit}>
            edit
          </button>

          <button className="action-button" onClick={handleOnDelete}>
            X
          </button>
        </div>
        <div className="main--info">
          <img
            className="icon"
            src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
            alt="icon"
          />
          <div className="title">{name}</div>
          <div className="description">{description}</div>
          <div className="temperature">{Math.round(temp)}</div>
        </div>
        <div className="information">
          <div>Ощущается как: {feels_like.toFixed()}</div>
          <div>Влажность: {humidity}%</div>
        </div>
      </Link>
    );
  }
  return (
    <div className="card">
      <div className="main--info">
        <img
          className="icon"
          src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
          alt="icon"
        />
        <div className="title">{name}</div>
        <div className="description">{description}</div>
        <div className="temperature">{Math.round(temp)}</div>
      </div>
      <div className="information">
        <div>Ощущается как: {feels_like.toFixed()}</div>
        <div>Влажность: {humidity}%</div>
      </div>
    </div>
  );
};

// @ts-ignore
export const Card = memo(CardNoMemo);
