import React, { useRef, useContext } from 'react';
import { GlobalContext } from '../App';
// import { useCurrentPosition } from '../hooks/useCurrentPosition';
import './Input.css';

export const Input = () => {
  const inputRef = useRef(null);
  const {
    dispatch,
    state: { inputValue, editingCity },
  } = useContext(GlobalContext);
  const handleOnAdd = () => {
    if (inputValue.length) {
      dispatch({
        type: 'ADD_CITY',
        payload: inputValue,
      });
      dispatch({
        type: 'RESET_INPUT_VALUE',
      });
      if (inputRef.current) {
        // @ts-ignore
        return inputRef.current.focus();
      }
    }
  };

  const handleOnDone = () => {
    if (inputValue.length) {
      dispatch({
        type: 'EDIT_CITY_DONE',
        payload: inputValue,
      });
      dispatch({
        type: 'RESET_INPUT_VALUE',
      });
      if (inputRef.current) {
        // @ts-ignore
        return inputRef.current.focus();
      }
    }
  };

  const handleOnChange = (event) => {
    dispatch({
      type: 'CHANGE_INPUT_VALUE',
      payload: event.target.value,
    });
  };
  const handleOnGeo = () => {
    // dispatch({
    //   type: 'ADD_CITY',
    // });
    console.log('click');
  };

  return (
    <div className="input--wrap">
      <input
        className="input"
        placeholder="Введите город"
        onChange={handleOnChange}
        value={inputValue}
        ref={inputRef}
      />
      {editingCity ? (
        <button className="button" onClick={handleOnDone}>
          Изменить
        </button>
      ) : (
        <button className="button" onClick={handleOnAdd}>
          Добавить
        </button>
      )}
      <button className="button geo-btn" onClick={handleOnGeo}>
        Geo
      </button>
    </div>
  );
};
