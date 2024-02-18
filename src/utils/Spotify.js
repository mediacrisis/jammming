const client_id = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const redirect_uri = 'http://localhost:3000/callback';
let accessToken;

const Spotify = {
	getAccessToken() {
		if(accessToken) {
			return accessToken;
		}

		const accessTokenMatch = window.location.href.match(/access_token=([^&]*)/);
		const expiresInMatch = window.location.href.match(/expires_in=([^&]*)/);
		const scope = 'playlist-modify-public';

		if (accessTokenMatch && expiresInMatch) {
			accessToken = accessTokenMatch[1];
			const expiresIn = Number(expiresInMatch[1]);
			window.setTimeout(() => accessToken = '', expiresIn * 1000);
			window.history.pushState('Access Token', null, '/');
			return accessToken;
		} else {
			let url = 'https://accounts.spotify.com/authorize';
			url += '?response_type=token';
			url += '&client_id=' + encodeURIComponent(client_id);
			url += '&scope=' + encodeURIComponent(scope);
			url += '&redirect_uri=' + encodeURIComponent(redirect_uri);

			window.location = url;
		}
	},

	search(term) {
		const accessToken = Spotify.getAccessToken();
		const headers = { Authorization: `Bearer ${accessToken}` };

		return fetch(`https://api.spotify.com/v1/search?type=track&q=track:${term} year:1990-1999`, {headers: headers}
		).then(response => {
			return response.json();
		}).then(jsonResponse => {
			if (!jsonResponse.tracks) {
				return [];
			}
			return jsonResponse.tracks.items.map(track => ({
				id: track.id,
				name: track.name,
				artist: track.artists[0].name,
				album: track.album.name,
				uri: track.uri,
				release_date: track.album.release_date,
				cover_img: track.album.images
			}));
		});
	},
	savePlaylist(name, trackUris) {
		if (!name || !trackUris.length) {
			return;
		}
		console.log(trackUris);
	
		const accessToken = Spotify.getAccessToken();
		const headers = { Authorization: `Bearer ${accessToken}` };
		let userId;
	
		return fetch('https://api.spotify.com/v1/me', {headers: headers}
		).then(response => response.json()
		).then(jsonResponse => {
		userId = jsonResponse.id;
		return fetch(`https://api.spotify.com/v1/users/${userId}/playlists`, {
			headers: headers,
			method: 'POST',
			body: JSON.stringify({name: name})
		}).then(response => response.json()
		).then(jsonResponse => {
			const playlistId = jsonResponse.id;
			return fetch(`https://api.spotify.com/v1/users/${userId}/playlists/${playlistId}/tracks`, {
				headers: headers,
				method: 'POST',
				body: JSON.stringify({uris: trackUris})
			});
		});
	});
	}
}

export default Spotify;