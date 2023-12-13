import React from 'react';
import css from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterForContacts } from 'redux/filterSlice';


const Filter = () => {
  const dispatch = useDispatch();

   function onFilterInput(e) {
     dispatch(filterForContacts(e.target.value));
   }

  
  return (
    <div>
      <h3 className={css.title}>Find contact by name</h3>
      <input className={css.input} type="text" onChange={onFilterInput} />
    </div>
  );
};

export default Filter;
