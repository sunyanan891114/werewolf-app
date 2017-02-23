import React, {Component} from 'react';
import {send, connect, subscribe} from './util/webSocket';
import $ from 'jquery';

const EnterRoom = ({onSubmit, subscribeCallBack, roomNum}) => {
  const submit = (e) => {
    e.preventDefault();
    let formData = $('.enter-room').serializeArray();
    if (roomNum) {
      formData.push({name: "roomNum", value: roomNum});
      send('/app/join', formData);
      onSubmit();
    } else {
      connect(() => {
        subscribe(subscribeCallBack);
        send('/app/join', formData);
        onSubmit();
      });
    }

    window.roomNum = formData.find(x => x.name == "roomNum").value;
    window.seatNum = formData.find(x => x.name == "seatNum").value;
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
