import React, { useState, useCallback } from 'react';
import styles from './SearchBar.module.css';

const SearchBar = (props) => {
	const [inputTerm, setInputTerm] = useState('');

	const handleSearchInput = useCallback(
		(e) => {
			setInputTerm(e.target.value);
		},
		[]
	);

	const handleSearch = useCallback(
		(e) => {
			e.preventDefault();
			props.onSearch(inputTerm);
		},
		[props, inputTerm]
	);

	return (
		<div className={styles.searchBar}>
			<form className={styles.searchForm} onSubmit={handleSearch}>
				<input type="text" name="search" id="search" placeholder="Enter search term" onChange={handleSearchInput} />
				<input type="submit" id="search-submit" value="Search" />
			</form>
		</div>
	);
};

export default SearchBar;