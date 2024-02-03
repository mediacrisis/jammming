import React from 'react';
import styles from './SearchBar.module.css';

const SearchBar = () => {
	const handleSearch = (e) => {
		e.preventDefault();
	}

	return (
		<div className={styles.searchBar}>
			<form className={styles.searchForm} onSubmit={handleSearch}>
				<input type="text" name="search" id="search" placeholder="Enter search term" />
				<input type="submit" id="search-submit" value="Search" />
			</form>
		</div>
	);
};

export default SearchBar;