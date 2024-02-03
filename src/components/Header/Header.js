import React from 'react';
import styles from './Header.module.css';

const Header = () => {
	return (
		<div className={styles.header}>
			<h1 className={styles.h1}>Jammming</h1>
			<h2 className={styles.h2}>A 90s Playlist Builder</h2>
		</div>
	)
};

export default Header;