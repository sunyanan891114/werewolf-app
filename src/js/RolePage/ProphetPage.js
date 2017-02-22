import React, {Component} from 'react';

export default class ProphetPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div>
      请输入想要查看的号码
    </div>
  }

  submit = () => {
    console.log(this.refs.number.value);
  };

}
