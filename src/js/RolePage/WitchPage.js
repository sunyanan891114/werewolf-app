import React, {Component} from 'react';

export default class WitchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      useSkill: false
    }
  }

  render() {
    return <div>
      {this.returnDom()}
    </div>
  }

  antidoteDom = () => {
    if (this.props.response.skillStatus.rescue && !this.state.useSkill) {
      return <div>
        <span>昨天晚上死的是:</span><span>{this.props.response.skillStatus.deadNumber | ""}</span>
        <button onClick={this.sendAction.bind(this, "rescue", this.props.response.skillStatus.deadNumber, true)} className="role-page__confirm-btn">确定
        </button>
        <button onClick={this.sendAction.bind(this, "unrescue", null, false)} className="role-page__confirm-btn">取消</button>
      </div>
    }
  };

  poisonDom = () => {
    if (this.props.response.skillStatus.poison && !this.state.useSkill) {
      return <div>
        <input type="text" placeholder="请输入你想要毒杀的号码" ref="killNumber" className="role-page__input"/>
        <button onClick={this.sendAction.bind(this, "poison", true)} className="role-page__confirm-btn">确定</button>
      </div>
    }
  };

  returnDom = () => {
    return <div>
      {this.antidoteDom()}
      {this.poisonDom()}
    </div>
  };

  sendAction = (action, useSkill) => {
    this.setState({useSkill: useSkill});
    this.props.sendAction(action, this.refs.killNumber.value);
  }
}
