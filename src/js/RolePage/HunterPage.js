import React, {Component} from 'react';

export default class HunterPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useSkill: useSkill
    }
  }

  render() {
    return <div>
      <span>当前技能状态是:</span><span>{this.props.response.skillStatus.shoot && this.state.useSkill ? "可用" : "不可用"}</span>
      <input type="text" placeholder="请输入你想要射杀的号码" ref="killNumber"/>
      <button onClick={this.sendAction.bind(this, "shoot", this.refs.killNumber.value, true)}>确定</button>
    </div>
  }

  sendAction = (action, target, useSkill) => {
    this.setState({useSkill: useSkill});
    this.props.sendAction(this.props.response.role + ":" + action, target);
  }
}
