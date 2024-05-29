import { useState, useEffect } from 'react';
import { apiUrl, apiKey } from '../settings/Settings';

export const useWeather = (city) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`${apiUrl}q=${city}&appid=${apiKey}&units=metric`)
      .then((res) => res.json())
      .then((fetchedData) => {
        if (fetchedData && fetchedData.cod && fetchedData.cod === '404') {
          throw new Error('CITY_NOT_FOUND');
        } else {
          setData(fetchedData);
        }
      })
      .catch(() => {
        setData(null);
      });
  }, [city]);

  return data;
};
