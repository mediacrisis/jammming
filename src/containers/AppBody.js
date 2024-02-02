import React from 'react';
import SearchBar from '../components/SearchBar';
import SearchResults from '../components/SearchResults';
import Playlist from '../components/Playlist';

const AppBody = () => {
	return (
		<div>
			<SearchBar />
			<SearchResults />
			<Playlist />
		</div>
	);
};

export default AppBody;