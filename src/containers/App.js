import React, { useState, useCallback } from 'react';
import styles from './App.module.css';
import Header from '../components/Header/Header';
import SearchBar from '../components/SearchBar/SearchBar';
import SearchResults from '../components/SearchResults/SearchResults';
import Playlist from '../components/Playlist/Playlist';
import Footer from '../components/Footer/Footer';
import Spotify from '../utils/Spotify';

function App() {
	// eslint-disable-next-line
	const [searchResults, setSearchResults] = useState([]);
	const [playlist, setPlaylist] = useState([]);
	const [playlistName, setPlaylistName] = useState('Untitled Playlist');

	const handleSearch = useCallback(
		(term) => {
			Spotify.search(term).then(setSearchResults);
		},
		[]
	);

	const handleAddTrack = useCallback(
		(track) => {
			if (playlist.some((savedTrack) => savedTrack.id === track.id)) {
				return;
			}

			setPlaylist((prevTracks) => [...prevTracks, track]);
			setSearchResults((prevResults) => 
				prevResults.filter((currentTrack) => currentTrack.id !== track.id ));
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

	const handleRename = useCallback(
		(name) => {
			setPlaylistName(name);
		},
		[]
	);

	const handleSave = useCallback(
		() => {
			let uris = [];
			playlist.forEach(track => (
				uris.push(track.uri)
			));
			Spotify.savePlaylist(playlistName, uris).then(setPlaylist([])).then(setPlaylistName('Untitled Playlist'));
		},
		[playlist, playlistName]
	);

	return (
	<div className={styles.app}>
		<Header />
		<SearchBar onSearch={handleSearch} />
		<div className={styles.listContainer}>
			<SearchResults btnClick={handleAddTrack} trackData={searchResults} />
			<Playlist btnClick={handleRemoveTrack} trackData={playlist} listName={playlistName} onRename={handleRename} onSave={handleSave}/>
		</div>
		<Footer />
	</div>
	);
}

export default App;
