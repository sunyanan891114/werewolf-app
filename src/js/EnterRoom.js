import React, {Component} from 'react';
import {send, connect, subscribe} from './util/webSocket';

const EnterRoom = ({onSubmit, subscribeCallBack, roomNum}) => {
  const submit = (e) => {
    e.preventDefault();
    let formData = new FormData(document.querySelector('.enter-room'));
    if (roomNum) {
      formData.append('roomNum', roomNum);
      send('/app/join', formData);
      onSubmit();
    } else {
      connect(() => {
        subscribe(subscribeCallBack);
        send('/app/join', formData);
        onSubmit();
      });
    }

    window.roomNum = formData.get('roomNum');
    window.seatNum = formData.get('seatNum');
  };

  return (
    <form onSubmit={ submit } className="enter-room">
      <label className="form-element">
        房间号：
        <input type="text" className="enter-room__input" name="roomNum" placeholder={roomNum} disabled={roomNum}/>
      </label>
      <label className="form-element">座位号：<input type="text" className="enter-room__input" name="seatNum"/></label>
      <button className="enter-room__button">确定</button>
    </form>
  )
};

export default EnterRoom;
