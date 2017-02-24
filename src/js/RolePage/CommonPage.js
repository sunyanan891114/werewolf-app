import React, {Component} from 'react';

export default class CommonPage extends Component {
  sendAction = () => {
    this.props.sendAction(this.props.role + ":" + "predict", this.refs.voteNum.value);
  };

  render() {
    return (
      <div>
        <input type="text" ref="voteNum" placeholder="请输入投票的号码"/>
        <button onClick={ this.sendAction }>确定</button>
      </div>
    );
  }
}
