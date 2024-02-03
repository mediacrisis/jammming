import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';
// @TODO: create dummy tracklist JSON object, run a loop to pass props into Track component.

const Tracklist = () => {
	return (
		<div className={styles.tracklist}>
			<Track />
			<Track />
		</div>
	);
};

export default Tracklist;