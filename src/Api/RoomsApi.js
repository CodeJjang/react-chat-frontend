import $ from 'jquery';

const _apiUrl = process.env.REACT_APP_SERVER_API_URL + '/room';
export function loadRooms() {
	return $.ajax({
		url: _apiUrl,
		dataType: 'json',
		xhrFields: {
			withCredentials: true
		}
	});
};

export function postRoom(room) {
	return $.ajax({
			url: _apiUrl,
			xhrFields: {
				withCredentials: true
			},
			type: 'POST',
			dataType: 'json',
			data: room
		});
};