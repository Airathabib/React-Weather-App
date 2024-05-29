import { useState, useEffect } from 'react';
import { apiKey } from '../settings/Settings';

export const useForecast = (coords) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    if (coords !== null) {
      const { lat, lon } = coords;
      fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&`,
      )
        .then((res) => res.json())
        .then(setData);
    }
  }, [coords]);
  return data;
};
