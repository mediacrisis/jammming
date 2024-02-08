const client_id = 'f62be76e0b06436e9f3337f110317c15';
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
			window.history.pushState('Access Token', null, '/'); // This clears the parameters, allowing us to grab a new access token when it expires.
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
		return fetch(`https://api.spotify.com/v1/search?type=track&q=track:${term} year:1990-1999`, {
			headers: {
				Authorization: `Bearer ${accessToken}`
			}
		}).then(response => {
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
	}
}

export default Spotify;