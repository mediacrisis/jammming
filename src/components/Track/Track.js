import React from 'react';
import styles from './Track.module.css';
import TrackButton from '../TrackButton/TrackButton';

const Track = (props) => {
	return (
		<div className={styles.track}>
			<div className={styles.trackInner}>
				<div><img src={props.track.cover_img[2].url} alt={props.track.album} /></div>
				<div>
					<p className={styles.title}>{props.track.name}</p>
					<p className={styles.artist}>{props.track.artist}</p>
					<p className={styles.album}>{props.track.album}</p>
				</div>
			</div>
			<TrackButton btnType={props.btnType} handleClick={props.btnClick} track={props.track} />
		</div>
	);
};

export default Track;