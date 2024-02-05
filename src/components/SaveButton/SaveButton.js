import React, { useCallback } from 'react';
import styles from './SaveButton.module.css';

const SaveButton = (props) => {
	const handleSavePlaylist = useCallback(
		() => {
			props.onSave();
		},
		[props]
	);

	return (
		<button className={styles.saveBtn} onClick={handleSavePlaylist}>Save Playlist</button>
	);
};

export default SaveButton;