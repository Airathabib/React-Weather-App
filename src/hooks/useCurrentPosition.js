import { useState, useEffect } from 'react';
import { apiUrl, apiKey } from '../settings/Settings';

export const useCurrentPosition = () => {
  const [data, setData] = useState(null);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      fetch(`${apiUrl}lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`)
        .then((res) => res.json())
        .then(setData)
        .catch((error) => {
          console.error('Error', error);
        });
    });
  });
  return data;
};
