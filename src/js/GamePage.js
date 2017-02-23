import React, {Component} from 'react';
import dispatchRole from './RolePage';
import {send} from './util/webSocket'

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "witch",
      roleStatus: false,
      action: true
    }
  }

  render() {
    return (
      <div>
        <span>角色:</span><span>{this.state.roleStatus ? this.state.role : "***"}</span>
        <button onClick={this.showOrHideRole}>{this.state.action ? "查看" : "隐藏"}</button>
        <div>
          { dispatchRole({sendAction: this.sendAction, status:true, role: this.state.role, deadNumber:"11"}) }
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
      roleStatus: !this.state.roleStatus,
      action: !this.state.action
    })
  }
}
