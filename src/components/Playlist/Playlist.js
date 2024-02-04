import React,{ useCallback } from 'react';
import Tracklist from '../Tracklist/Tracklist';
import styles from './Playlist.module.css';

const Playlist = (props) => {
	const handleRename = useCallback(
		(e) => {
			props.onRename(e.target.value);
		},
		[props]
	);

	return (
			<div className={styles.playlistContainer}>
			<div className={styles.rename}>
				<form>
				<label htmlFor="rename">You Name It</label>
					<input type="text" id="rename" name="rename" value={props.listName} onChange={handleRename} />
				</form>
			</div>
				<div className={styles.playlist}>
					<h3>{props.listName}</h3>
					<Tracklist trackData={props.trackData} btnType="remove" btnClick={props.btnClick} />
				</div>
			</div>
	);
}

export default Playlist;