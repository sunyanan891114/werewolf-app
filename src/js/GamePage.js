import React, {Component} from 'react';
import roleName from './util/roleName';
import GameProcess from './GameProcess';
import MessageAudio from './MessageAudio';

export default class GamePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showLabel: false,
    };
    document.querySelector("body").classList.remove("dark-blue-bg");
    document.querySelector("body").classList.add("black-bg");
  }

  render() {
    return (
      <div className="game_page__container">
        <MessageAudio gameProcess={this.props.response.gameProcess} voice={this.props.response.voice}/>
        <span className="game_page__role"
              onClick={this.showOrHideRole}>{this.state.showLabel ? roleName[this.props.response.role] : "角色卡"}</span>
        <GameProcess role={this.props.response.role} daylight={this.props.response.daylight}
                     gameProcess={this.props.response.gameProcess} skill={this.props.response.skill}/>
        <i className={"game_page__avatar game_page__avatar-" + (this.state.showLabel ? this.props.response.role : "random")}
          onClick={this.showOrHideRole}/>
      </div>
    )
  }

  showOrHideRole = () => {
    this.setState({
      showLabel: !this.state.showLabel
    })
  };
}
