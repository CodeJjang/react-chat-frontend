import $ from 'jquery';
import urljoin from 'url-join';

const _apiUrl = urljoin(process.env.REACT_APP_SERVER_API_URL, '/user');
export function loadUsers(roomId) {
	return $.ajax({
		url: _apiUrl,
		dataType: 'json',
		data: {
			roomId: roomId
		},
		xhrFields: {
			withCredentials: true
		}
	});
};