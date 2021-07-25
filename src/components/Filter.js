import React from 'react';
import { useDispatch } from 'react-redux';
import { filterName } from '../redux/actions';

const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = (event) => {
    dispatch(filterName({ value: event.target.value }));
  };

  return (
    <div className="d-flex justify-content-end align-items-center">
      <p className="mb-0 px-2">Search for your pokemon here:</p>
      <input className="text-center" type="text" onChange={handleChange} placeholder="Pokemon Name" />
    </div>
  );
};

export default Filter;
