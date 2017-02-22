import React, {Component} from 'react';
import {send} from './util/webSocket';

const CreateRoom = ({onSubmit}) => {
  const submit = (e) => {
    e.preventDefault();
    send('/app/create', new FormData(document.querySelector('.select-room')));
    onSubmit();
  };

  return (
    <form onSubmit={ submit } className="select-room">
      <label htmlFor="roomNumber">房间号</label><input type="text" id="roomNumber" />
      <label htmlFor="seatNumber">座位号</label><input type="text" id="seatNumber" />
      <button>确定</button>
    </form>
  )
};

export default CreateRoom;
