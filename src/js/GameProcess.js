import React, {Component} from 'react';
import dispatchRole from './RolePage';
import {send} from './util/webSocket';

export default class GameProcess extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false,
      showCommandSection: false
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

  componentWillReceiveProps(nextProps) {
    if (nextProps.gameProcess == "") {
      this.setState({
        showCommandSection:true
      });
    }
  }

  renderCommandSection() {
    return this.state.isReady && this.state.showCommandSection ?
      dispatchRole({sendAction: this.sendAction,
                    role: this.props.role,
                    daylight: this.props.daylight,
                    skill: this.props.skill}) : null;
  }

  sendAction = (action, target) => {
    send('/app/play', {action: action, target: target, roomNum: window.roomNum, seatNum: window.seatNum});
    this.setState({
      showCommandSection: false
    });
  };

  readyForGame = () => {
    send('/app/players', {roomNum: window.roomNum, isReady: true, seatNum: window.seatNum});
    this.setState({
      isReady: true
    });
  }
}
