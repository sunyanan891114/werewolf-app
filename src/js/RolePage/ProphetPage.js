import React, {Component} from 'react';

export default class ProphetPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <input type="text" placeholder="请输入你想要查看的号码" ref="predictNumber"/>
      <button onClick={this.sendAction.bind(this, "predict", this.refs.predictNumber.value, true)}>确定</button>
    </div>
  }

  sendAction = (action, target) => {
    this.props.sendAction(this.props.response.role + ":" + action, target);
  };
}
