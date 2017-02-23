import React, {Component} from 'react';

export default class WitchPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      {this.returnDom()}
    </div>
  }

  returnDom = () => {
    if (this.props.status) {
      return <div>
        <span>昨天晚上死的是:</span><span>{this.props.deadNumber}</span>
        <button onClick={this.sendAction.bind(this, "rescue", this.props.deadNumber)}>确定</button>
        <button onClick={this.sendAction.bind(this, "unrescue", null)}>取消</button>
      </div>
    } else {
      return null;
    }
  };

  sendAction = (action, target) => {
    this.props.sendAction(this.props.role + ":" + action, target);
  }
}
