import React, {Component} from 'react';

export default class HunterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        { this.props.daylight ? this.renderHunterDay() : this.renderHunterNight()}
      </div>
    )
  }

  renderHunterNight() {
    return (
      <div className="role-page">
        <span className="role-page__description">当前技能状态是: </span>
        <span className="role-page__description--skill-status">{this.props.skillStatus.shoot ? "可用" : "不可用"}</span>
      </div>
    )
  }

  renderHunterDay() {
    return (
      <div className="role-page">
        <input type="text" placeholder="请输入你想要射杀的号码" ref="killNumber" className="role-page__input"/>
        <button onClick={this.sendAction} className="role-page__confirm-btn">确定</button>
      </div>
    )
  }

  sendAction = () => {
    this.props.sendAction(this.props.role + ":shoot", this.refs.killNumber.value);
  }
}
