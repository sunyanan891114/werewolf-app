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
        <span>昨天晚上死的是:</span><span>this.props.deadNumber</span>
        <button>确定</button>
        <button>取消</button>
      </div>
    } else {
      return null;
    }
  };

  submit = () => {
    console.log(this.refs.number.value);
  };

}
