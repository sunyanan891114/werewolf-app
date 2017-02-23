import React, {Component} from 'react';
import dispatchRole from './RolePage';
import {send} from './util/webSocket';
import roleName from './util/roleName';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLabel: false,
      isReady: false,
      gameProcess: "在这里显示游戏进程"
    };
  }

  render() {
    return (
      <div>
        <span>角色: </span><span>{this.state.showLabel ? roleName[this.props.response.role] : "***"}</span>
        <button onClick={this.showOrHideRole}>{this.state.showLabel ? "隐藏" : "查看"}</button>
        {!this.state.isReady && <button onClick={this.readyForGame}>准备好了</button>}
        <div>{ this.state.gameProcess }</div>
        { this.renderVoteInput() }
        { dispatchRole({sendAction: this.sendAction, response: this.props.response}) }
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      gameProcess: nextProps.response.message
    });
  }

  renderVoteInput() {
    return this.props.response.day ?
      <div>
        <input type="text" ref="number" placeholder="请输入投票的号码"/>
        <button onClick={this.submit}>确定</button>
      </div> : null;
  }

  submit = () => {
    console.log(this.refs.number.value);
  };

  sendAction = (action, target) => {
    send('/app/join', {action: action, target: target});
  };

  showOrHideRole = () => {
    this.setState({
      showLabel: !this.state.showLabel
    })
  };

  readyForGame = () => {
    send('/app/players', {isReady: true});
    this.setState({
      isReady: true
    });
  }
}
