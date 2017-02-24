import React, {Component} from 'react';

export default class ProphetPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <input type="text" placeholder="请输入你想要查看的号码" ref="predictNumber"/>
      <button onClick={this.sendAction}>确定</button>
    </div>
  }

  sendAction = () => {
    this.props.sendAction("check", this.refs.predictNumber.value);
  }
}
