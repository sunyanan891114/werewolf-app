import React, {Component} from 'react';

export default class WerewolfPage extends Component {
  sendAction = () => {
    this.props.sendAction("kill", this.refs.voteNum.value);
  };

  render() {
    return (
      <div className="role-page">
        <input type="text" ref="voteNum" placeholder="请输入杀人号码" className="role-page__input"/>
        <button onClick={ this.sendAction } className="role-page__confirm-btn">确定</button>
      </div>
    );
  }
}

