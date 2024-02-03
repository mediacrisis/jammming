import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

const SearchResults = () => {
	return (
		<div className={styles.searchResultsContainer}>
			<div className={styles.searchResults}>
				<h3>Search Results</h3>
				<Tracklist />
			</div>
		</div>
	);
};

export default SearchResults;