import React from 'react';

const SearchBar = () => {
	return (
		<div>
			<form>
				<input type="text" name="search" id="search" value="Search Songs" />
				<input type="submit" value="Search" />
			</form>
		</div>
	);
};

export default SearchBar;