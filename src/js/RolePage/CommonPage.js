import React, {Component} from 'react';

export default class CommonPage extends Component {
  sendAction = () => {
    this.props.sendAction("vote", this.refs.voteNum.value);
  };

  render() {
    return (
      <div className="role-page">
        <input type="text" ref="voteNum" placeholder="请输入投票的号码" className="role-page__input"/>
        <button onClick={ this.sendAction } className="role-page__confirm-btn">确定</button>
      </div>
    );
  }
}
