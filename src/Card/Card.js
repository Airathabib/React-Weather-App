import React, { memo, useContext } from 'react';
import { Link } from 'react-router-dom';
import { useWeather } from '../hooks/useWeather';
import { GlobalContext } from '../App';
import './Card.css';

const CardNoMemo = ({ city }) => {
  const data = useWeather(city);
  const { dispatch } = useContext(GlobalContext);
  if (data === null) return console.log('error');
  if (!data) return null;
  const { name, weather, main } = data;
  const { description, icon } = weather[0];
  const { temp, humidity, feels_like } = main;

  const handleOnDelete = () => {
    dispatch({
      type: 'DELETE_CITY',
      payload: city,
    });
  };

  const handleOnEdit = () => {
    dispatch({
      type: 'EDIT_CITY',
      payload: city,
    });
  };

  return (
    <Link to={`/city/${city.toLowerCase()}`} className="card">
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
        <div>Ощущается как: {feels_like}</div>
        <div>Влажность: {humidity}</div>
      </div>
    </Link>
  );
};

// @ts-ignore
export const Card = memo(CardNoMemo);
