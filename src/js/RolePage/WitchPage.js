import React, {Component} from 'react';
import {send} from '../util/webSocket'

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
        <span>昨天晚上死的是:</span><span>this.props.deadNumber</span>
        <button onClick={this.props.sendAction.bind(this, true)}>确定</button>
        <button onClick={this.props.sendAction.bind(this, false)}>取消</button>
      </div>
    } else {
      return null;
    }
  };
}
