import React, {Component} from 'react';

export default class ProphetPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className="role-page">
      <input type="text" placeholder="请输入你想要查看的号码" ref="predictNumber" className="role-page__input"/>
      <button onClick={this.sendAction } className="role-page__confirm-btn">确定</button>
    </div>
  }

  sendAction = () => {
    this.props.sendAction(this.props.response.role + ":" + "predict", this.refs.predictNumber.value);
  };
}
