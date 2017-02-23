import React, {Component} from 'react';
import dispatchRole from './RolePage';
import {send} from './util/webSocket';
import {baiduAudio} from './config/config';
import roleName from './util/roleName';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLabel: false,
      isReady: false,
      gameProcess: ""
    };
    document.querySelector("body").classList.remove("dark-blue-bg");
    document.querySelector("body").classList.add("black-bg");
  }

  render() {
    return (
      <div className="game_page__container">
        { this.renderVideoMessage()}
        <span className="game_page__role"
              onClick={this.showOrHideRole}>{this.state.showLabel ? roleName[this.props.response.role] : "角色卡"}</span>
        <div className="game_page__gameProcess">{ this.state.gameProcess }
          {!this.state.isReady && <button className="game_page-ready__button" onClick={this.readyForGame}>准备好了</button>}
          { this.renderCommandSection() }
        </div>
        <i
          className={"game_page__avatar game_page__avatar-" + (this.state.showLabel ? this.props.response.role : "random")}
          onClick={this.showOrHideRole}/>
      </div>
    )
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      gameProcess: nextProps.response.message
    });
  }

  renderVideoMessage() {
    return this.props.response.voice ?
      <audio controls autoPlay name="media" style={{display: "none"}}>
        <source src={ baiduAudio(this.state.gameProcess) } type="audio/mp3"/>
      </audio> : null
  }

  renderCommandSection() {
    if (this.state.isReady) {
      return (this.props.response.daylight ?
        <div>
          <input type="text" ref="number" placeholder="请输入投票的号码"/>
          <button onClick={this.submit}>确定</button>
        </div> : dispatchRole({sendAction: this.sendAction, response: this.props.response}));
    }
  }

  submit = () => {
    console.log(this.refs.number.value);
  };

  sendAction = (action, target) => {
    send('/app/join', {action: action, target: target});
  };

  showOrHideRole = () => {
    this.setState({
      showLabel: !this.state.showLabel
    })
  };

  readyForGame = () => {
    send('/app/players', {roomNum: window.roomNum, isReady: true, seatNum: window.seatNum});
    this.setState({
      isReady: true
    });
  }
}
