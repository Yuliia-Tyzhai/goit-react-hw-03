import React from 'react';
import styles from './SearchBox.module.css';

const SearchBox = ({ filter, setFilter }) => {
  return (
    <div>
      <h3 className={styles.title}>Find contacts by name</h3>
      <input
        className={styles.searchInput}
        type="text"
        value={filter}
        onChange={event => setFilter(event.target.value)}
      />
    </div>
  );
};

export default SearchBox;
