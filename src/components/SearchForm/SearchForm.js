
import React, { useState } from 'react';
import css from './Form.module.css';

const SearchForm = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(query);
  };

  return (
    <form onSubmit={handleSubmit} className={css.Formf}>
      <input className= {css.Forminput}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search movies..."
      />
      <button type="submit" className={css.SrcButton}>Search</button>
    </form>
  );
};

export default SearchForm;
