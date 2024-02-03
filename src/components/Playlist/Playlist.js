import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

const Playlist = () => {
	return (
		<div className={styles.playlistContainer}>
			<div className={styles.playlist}>
				<h3>Playlist</h3>
				<Tracklist />
			</div>
		</div>
	);
}

export default Playlist;