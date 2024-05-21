import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Channel = () => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.post.filter);

  const handleFilter = (e) => {
    dispatch({ type: 'SET_FILTER', payload: e.target.value });
  }

  return (

    <div className="channel">
      <label htmlFor='filter'>Filter for categories:</label>
      <select name='filter' value={filter} onChange={handleFilter}>
        <option value='all'>All</option>
        <option value="news">News</option>
        <option value="sports">Sports</option>
        <option value="tech">Tech</option>
      </select>
    </div>
  )
}

export default Channel;
