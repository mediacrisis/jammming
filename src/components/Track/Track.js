import React from 'react';
import styles from './Track.module.css';
import TrackButton from '../TrackButton/TrackButton';

const Track = (props) => {
	return (
		<div className={styles.track}>
			<div>
				<p className={styles.title}>{props.track.title}</p>
				<p className={styles.artist}>{props.track.artist}</p>
				<p className={styles.album}>{props.track.album}</p>
			</div>
			<TrackButton btnType={props.btnType} handleClick={props.btnClick} track={props.track} />
		</div>
	);
};

export default Track;