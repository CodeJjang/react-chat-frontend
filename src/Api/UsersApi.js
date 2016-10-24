import $ from 'jquery';

const _apiUrl = process.env.REACT_APP_SERVER_API_URL + '/user';
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