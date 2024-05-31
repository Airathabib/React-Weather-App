/* eslint-disable react/display-name */
import { useContext } from 'react';
import { GlobalContext } from '../App';
import React from 'react';

export const withGlobalState = (Component) => (props) => {
  const { state } = useContext(GlobalContext);
  return <Component {...{ ...props, state }} />;
};
