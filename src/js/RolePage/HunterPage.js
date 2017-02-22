import React, {Component} from 'react';

export default class HunterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <span>当前技能状态是:</span><span>{this.props.status}</span>
      <button onClick={this.props.sendAction.bind(this, true)}>确定</button>
      <button onClick={this.props.sendAction.bind(this, false)}>取消</button>
    </div>
  }
}
