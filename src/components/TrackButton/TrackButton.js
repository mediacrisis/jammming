import React, { useCallback } from 'react';
import styles from './TrackButton.module.css';

const TrackButton = (props) => {
	const handleClick = useCallback(
		() => {
			props.handleClick(props.track);
		},
		[props]
	);
	return (
		<button className={styles.trackButton} onClick={handleClick}>{props.btnType === 'add' ? '+' : '-'}</button>
	);
};

export default TrackButton;