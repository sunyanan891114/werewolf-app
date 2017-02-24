import React, {Component} from 'react';

export default class ProphetPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>{this.props.skillStatus.result ? this.showResultDOM() : this.showPredictDOM()}</div>
  }

  showResultDOM = () => {
    return <div>
      <span>验证结果是:</span><span>{this.props.response.skillStatus.result}</span>
      <button className="role-page__confirm-btn">确定</button>
    </div>
  };

  showPredictDOM = () => {
    return <div>
      <input type="text" placeholder="请输入你想要查看的号码" ref="predictNumber"/>
      <button onClick={this.sendAction}>确定</button>
    </div>
  };

  sendAction = () => {
    this.props.sendAction("check", this.refs.predictNumber.value);
  }
}
