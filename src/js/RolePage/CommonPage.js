import React from 'react';

export default ({...props}) => {
  const sendAction = () => {
    props.sendAction(props.response.role + ":" + "predict", this.refs.voteNum.value);
  };

  return (
    <div>
      <input type="text" ref="voteNum" placeholder="请输入投票的号码"/>
      <button onClick={ sendAction }>确定</button>
    </div>
  );
}
