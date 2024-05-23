import React from 'react';
import { Card } from '../Card/Card';
import './SingleCity.css';

export const SingleCity = (state) => {
  console.log('props', state);
  return <Card city={state} />;
};
