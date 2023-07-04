import React from 'react';
import styles from './SearchBar.module.css';
import { AiOutlineSearch } from "react-icons/ai";

interface SearchBarProps {
  onSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onRegionFilter: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, onRegionFilter }) => {
  return (
    <div className={styles["search-bar"]}>
      <span className={styles["prefix-icon"]}>
        <AiOutlineSearch />
      </span>
      <input type="text" className='form-control mr-sm-2' placeholder="Search for a country" onChange={onSearch} />
    </div>
  );
};

export default SearchBar;
