import React, {Component} from 'react';

export default class HunterPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      <span>当前技能状态是:</span><span>{this.props.status}</span>
      <button>确定</button><button>取消</button>
    </div>
  }

  submit = () => {
    console.log(this.refs.number.value);
  };

}
