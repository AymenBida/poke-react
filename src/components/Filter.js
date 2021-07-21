import React from 'react';
import { useDispatch } from 'react-redux';
import { filterName } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterName({ value: event.target.value }));
  };

  return (
    <input type="text" onChange={handleChange} />
  );
};

export default Filter;
