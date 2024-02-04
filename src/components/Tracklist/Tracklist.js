import React from 'react';
import Track from '../Track/Track';
import styles from './Tracklist.module.css';

const Tracklist = (props) => {
	return (
		<div className={styles.tracklist}>
		{props.trackData.length > 0 ? props.trackData.map((track) => (
			<Track 
			btnType={props.btnType}
			btnClick={props.btnClick}
			track={track}
			key={track.id}
			/>
			)) : ''}
		</div>
	);
};

export default Tracklist;
