import React, {Component} from 'react';

export default class CreateRoom extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form onSubmit={ this.submit }>
        <label htmlFor="roomNumber">房间号</label><input type="text" id="roomNumber" ref="roomNumber"/>
        <label htmlFor="seatNumber">座位号</label><input type="text" id="seatNumber" ref="seatNumber"/>
        <button>确定</button>
      </form>
    )
  }

  submit = (e) => {
    e.preventDefault();
    console.log(this.refs.roomNumber.value);
    console.log(this.refs.seatNumber.value);
    this.props.onSubmit();
  }
}
