import React from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

const Playlist = (props) => {
	return (
		<div className={styles.playlistContainer}>
			<div className={styles.playlist}>
				<h3>Playlist</h3>
				<Tracklist trackData={props.trackData} btnType="remove" btnClick={props.btnClick} />
			</div>
		</div>
	);
}

export default Playlist;