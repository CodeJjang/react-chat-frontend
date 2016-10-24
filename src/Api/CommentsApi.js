import $ from 'jquery';

const _apiUrl = process.env.REACT_APP_SERVER_API_URL + '/comment';
export function loadComments(roomId) {
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

export function postComment(comment) {
	return $.ajax({
			url: _apiUrl,
			xhrFields: {
				withCredentials: true
			},
			type: 'POST',
			dataType: 'json',
			data: comment
		});
};