import React, {Component} from 'react';

export default ({...props}) => {
  const sendAction = () => {
    props.sendAction(props.response.role + ":" + "predict", this.refs.predictNumber.value);
  };

  return (
    <div className="role-page">
    <input type="text" placeholder="请输入你想要查看的号码" ref="predictNumber" className="role-page__input"/>
    <button onClick={sendAction } className="role-page__confirm-btn">确定</button>
  </div>
  );
}
