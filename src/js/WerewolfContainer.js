import React, {Component} from 'react';
import CreateRoom from './CreateRoom';
import EnterRoom from './EnterRoom';
import GamePage from './GamePage';
import Welcome from './Welcome';

import handleResponse from './util/handleResponse';

export default class WerewolfContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreateRoom: false,
      showEnterRoom: false,
      showGame: false,
      showWelcome: true,
      response: {}
    };
    this.createRoom = this.createRoom.bind(this);
    this.closeCreateRoom = this.closeCreateRoom.bind(this);
    this.enterRoom = this.enterRoom.bind(this);
    this.enterGamePage = this.enterGamePage.bind(this);
    this.changeResponse = this.changeResponse.bind(this);
  }

  render() {
    return (
      <div className="werewolf-app-container">
        { this.state.showWelcome ? <Welcome onCreateRoom={ this.createRoom } onEnterRoom={ this.enterRoom }/> : null }
        { this.state.showCreateRoom ? <CreateRoom onSubmit={ this.enterRoom }
                                                  onClose={ this.closeCreateRoom }
                                                  subscribeCallBack={ this.changeResponse }/> : null }
        { this.state.showEnterRoom ? <EnterRoom onSubmit={ this.enterGamePage }
                                                subscribeCallBack={ this.changeResponse }
                                                roomNum = { this.state.response.roomNum || null }/> : null }
        { this.state.showGame ? <GamePage response={this.state.response}/> : null }
      </div>
    );
  }

  changeResponse(response) {
    this.setState({
      response: new handleResponse(response).parse()
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
