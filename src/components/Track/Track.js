import React from 'react';
import styles from './Track.module.css';
// @TODO: confirm all props needed per track (currently just song title, album and artist for dummy data).
// @TODO: include add to playlist button.

const Track = (props) => {
	return (
		<div className={styles.track}>
			<p className={styles.title}>{props.title}</p>
			<p className={styles.artist}>{props.artist}</p>
			<p className={styles.album}>{props.album}</p>
		</div>
	);
};

export default Track;