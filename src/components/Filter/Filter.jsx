import React from 'react';
import PropTypes from 'prop-types';
import {useDispatch, useSelector } from 'react-redux';
import {choiceFilter} from 'redux/contactsSlice';
import { getFilter } from 'redux/contactsSelectors';
import css from './Filter.module.css';

function Filter() {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changesFilter = e => dispatch(choiceFilter(e.currentTarget.value));

  return (
    <label className={css.label}>
      <p className={css.text}>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={filter}
        onChange={ changesFilter}
      />
    </label>
  );

}

Filter.prototype = {
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default Filter;