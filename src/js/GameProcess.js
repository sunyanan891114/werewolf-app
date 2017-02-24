import React, {Component} from 'react';
import dispatchRole from './RolePage';
import {send} from './util/webSocket';

export default class GameProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  render() {
    return (
      <div className="game_page__gameProcess">{ this.props.gameProcess }
        {!this.state.isReady && <button className="game_page-ready__button" onClick={this.readyForGame}>准备好了</button>}
        { this.renderCommandSection() }
      </div>
    );
  }

  renderCommandSection() {
    return this.state.isReady ?
      dispatchRole({sendAction: this.sendAction,
                    role: this.props.role,
                    daylight: this.props.daylight,
                    skill: this.props.skill}) : null;
  }

  sendAction = (action, target) => {
    send('/app/player', {action: action, target: target, roomNum: window.roomNum, seatNum: window.seatNum});
  };

  readyForGame = () => {
    send('/app/players', {roomNum: window.roomNum, isReady: true, seatNum: window.seatNum});
    this.setState({
      isReady: true
    });
  }
}
