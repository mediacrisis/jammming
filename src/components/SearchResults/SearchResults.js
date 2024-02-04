import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './SearchResults.module.css';

const SearchResults = (props) => {
	return (
		<div className={styles.searchResultsContainer}>
			<div className={styles.searchResults}>
				<h3>Search Results</h3>
				<Tracklist trackData={props.trackData} btnType="add" btnClick={props.btnClick} />
			</div>
		</div>
	);
};

export default SearchResults;