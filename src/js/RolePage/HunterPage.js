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
        <button onClick={this.sendAction.bind(this,true)} className="role-page__confirm-btn">确定</button>
        <button onClick={this.sendAction.bind(this,false)} className="role-page__confirm-btn">取消</button>
      </div>
    )
  }

  sendAction = (kill) => {
    this.props.sendAction("shoot", kill ? this.refs.killNumber.value : null);
  }
}
