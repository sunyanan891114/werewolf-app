import React, {Component} from 'react';
import dispatchRolePage from './RolePage';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      role: "prophet",
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
          { dispatchRolePage(this.state.role) }
          <input type="text" ref="number" placeholder="请输入投票的号码"/>
          <button onClick={this.submit}>确定</button>
        </div>
      </div>
    )
  }

  submit = () => {
    console.log(this.refs.number.value);
  };

  showOrHideRole = () => {
    this.setState({
      roleStatus: !this.state.roleStatus,
      action: !this.state.action
    })
  }
}
