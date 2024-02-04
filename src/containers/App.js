import React, { useState, useCallback } from 'react';
import styles from './App.module.css';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import Playlist from '../components/Playlist/Playlist';
import Footer from '../components/Footer/Footer';
import testData from '../testData';

function App() {
	// eslint-disable-next-line
	const [searchResults, setSearchResults] = useState(testData.tracks);
	const [playlist, setPlaylist] = useState([]);

	const handleAddTrack = useCallback(
		(track) => {
			if (playlist.some((savedTrack) => savedTrack.id === track.id)) {
				return;
			}

			setPlaylist((prevTracks) => [...prevTracks, track]);
		},
		[playlist]
	);

	const handleRemoveTrack = useCallback(
		(track) => {
			setPlaylist((prevTracks) => 
			prevTracks.filter((currentTrack) => currentTrack.id !== track.id));
		},
		[]
	);

	return (
	<div className={styles.app}>
		<Header />
		<SearchBar />
		<div className={styles.listContainer}>
			<SearchResults btnClick={handleAddTrack} trackData={searchResults} />
			<Playlist btnClick={handleRemoveTrack} trackData={playlist} />
		</div>
		<Footer />
	</div>
	);
}

export default App;
