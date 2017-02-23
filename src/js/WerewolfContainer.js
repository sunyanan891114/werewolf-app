import React, {Component} from 'react';
import CreateRoom from './CreateRoom';
import EnterRoom from './EnterRoom';
import GamePage from './GamePage';
import Welcome from './Welcome';

import {subscribe} from './util/webSocket';
import {handleResponse} from './util/handleResponse';

export default class WerewolfContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateRoom: false,
      showEnterRoom: false,
      showGame: false,
      showWelcome: true
    };
    this.createRoom = this.createRoom.bind(this);
    this.closeCreateRoom = this.closeCreateRoom.bind(this);
    this.enterRoom = this.enterRoom.bind(this);
    this.enterGamePage = this.enterGamePage.bind(this);
    this.subscribeCallBack = this.subscribeCallBack.bind(this);
  }

  render() {
    return (
      <div className="werewolf-app-container">
        { this.state.showWelcome ? <Welcome onCreateRoom={ this.createRoom } onEnterRoom={ this.enterRoom }/> : null }
        { this.state.showCreateRoom ? <CreateRoom onSubmit={ this.enterRoom } onClose={ this.closeCreateRoom } subscribeCallBack={ this.subscribeCallBack }/> : null }
        { this.state.showEnterRoom ? <EnterRoom onSubmit={ this.enterGamePage } subscribeCallBack={ this.subscribeCallBack }/> : null }
        { this.state.showGame ? <GamePage /> : null }
      </div>
    );
  }

  subscribeCallBack(endpoint) {
    subscribe(endpoint, (response) => {
      this.setState({
        message: handleResponse(response)
      });
    });
  }

  createRoom() {
    this.setState({
      showCreateRoom: true,
      showEnterRoom: false,
      showWelcome: false
    });
  }

  enterRoom() {
    this.setState({
      showEnterRoom: true,
      showCreateRoom: false,
      showWelcome: false
    });
  }

  enterGamePage() {
    this.setState({
      showEnterRoom: false,
      showGame: true
    });
  }

  closeCreateRoom() {
    this.setState({
      showCreateRoom: false,
      showWelcome: true
    });
  }
}
