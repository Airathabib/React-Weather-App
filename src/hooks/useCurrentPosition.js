import { useState, useEffect } from 'react';
import { apiUrl, apiKey } from '../settings/Settings';

export const useCurrentPosition = () => {
  const [data, setData] = useState(null);
  navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    useEffect(() => {
      fetch(`${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then((res) => res.json())
        .then(setData)
        .catch((error) => {
          console.error('Error', error);
        });
      console.log('data', data);
    });
  });
  return data;
};
