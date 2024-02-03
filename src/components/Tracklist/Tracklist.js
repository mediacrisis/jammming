import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const Tracklist = (props) => {
	return (
		<div className={styles.tracklist}>
		{props.trackData.length > 0 ? props.trackData.map((track) => (
			<Track 
			key={track.id}
			artist={track.artist}
			title={track.title}
			album={track.album}
			/>
			)) : ''}
		</div>
	);
};

export default Tracklist;
