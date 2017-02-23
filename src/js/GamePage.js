import React, {Component} from 'react';
import dispatchRole from './RolePage';
import {send} from './util/webSocket'

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLabel: false,
      isReady: false,
      gameProcess: "在这里显示游戏进程",
      role: "witch",
      alive: true,
      daylight: true,
      message: "",
      voice: false,
      skillStatus: {}
    }
  }

  render() {
    return (
      <div>
        <span>角色:</span><span>{this.state.showLabel ? this.state.role : "***"}</span>
        <button onClick={this.showOrHideRole}>{this.state.showLabel ? "隐藏" : "查看"}</button>
        <button onClick={this.readyForGame} disabled={this.state.isReady}>准备好了</button>
        <div>{this.state.gameProcess}</div>
        <div>
          { dispatchRole({sendAction: this.sendAction, status: true, role: this.state.role, deadNumber: "11"}) }
          <input type="text" ref="number" placeholder="请输入投票的号码"/>
          <button onClick={this.submit}>确定</button>
        </div>
      </div>
    )
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
    send('/app/players', {gameId: this.props.gameId.toString(), isReady: true});
    this.setState({
      isReady: true
    })
  }
}
