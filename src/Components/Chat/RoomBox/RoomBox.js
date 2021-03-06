import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import RoomList from './RoomList';
import AddButton from './AddButton';
import AddRoomPopover from './AddRoomPopover';
import './RoomBox.css';

class RoomBox extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showAddRoom: false
		};
		this.toggleAddRoom = this.toggleAddRoom.bind(this);
		this.onHide = this.onHide.bind(this);
		this.handleRoomSubmit = this.handleRoomSubmit.bind(this);
	}
	toggleAddRoom() {
		this.setState({
			showAddRoom: !this.state.showAddRoom
		});
	}
	onHide() {
		this.setState({
			showAddRoom: false
		});
	}
	handleRoomSubmit(room) {
		this.setState({
			showAddRoom: false
		});
		this.props.onRoomSubmit(room);
	}
	render() {
		return (
			<div className='RoomsBox'>
				<AddRoomPopover show={this.state.showAddRoom}
					onHide={this.onHide}
					container={this}
					target={() => ReactDOM.findDOMNode(this._addButton)}
					onRoomSubmit={this.handleRoomSubmit} />
				<AddButton ref={(c) => this._addButton = c}
					onClickHandler={this.toggleAddRoom} />
				<h4>Rooms</h4>
				<RoomList rooms={this.props.rooms} />
			</div>
			);
	}
}

RoomBox.propTypes = {
	onRoomSubmit: PropTypes.func.isRequired,
	rooms: RoomList.propTypes.rooms
};

export default RoomBox;