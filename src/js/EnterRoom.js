import React, {Component} from 'react';
import {send} from './util/webSocket';

const CreateRoom = ({onSubmit}) => {
  const submit = (e) => {
    e.preventDefault();
    send('/app/create', new FormData(document.querySelector('.enter-room')));
    onSubmit();
  };

  return (
    <form onSubmit={ submit } className="enter-room">
      <label className="form-element">房间号：<input type="text" className="enter-room__input"/></label>
      <label className="form-element">座位号：<input type="text" className="enter-room__input"/></label>
      <button className="enter-room__button">确定</button>
    </form>
  )
};

export default CreateRoom;
