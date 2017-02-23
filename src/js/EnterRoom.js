import React, {Component} from 'react';
import {send, connect} from './util/webSocket';

const CreateRoom = ({onSubmit}) => {
  const submit = (e) => {
    e.preventDefault();
    connect('/user/queue/players', () => {
      send('/app/join', new FormData(document.querySelector('.enter-room')));
      onSubmit();
    });
  };

  return (
    <form onSubmit={ submit } className="enter-room">
      <label className="form-element">房间号：<input type="text" className="enter-room__input" name="roomNum"/></label>
      <label className="form-element">座位号：<input type="text" className="enter-room__input" name="seatNum"/></label>
      <button className="enter-room__button">确定</button>
    </form>
  )
};

export default CreateRoom;
