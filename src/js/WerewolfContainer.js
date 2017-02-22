import React, {Component} from 'react';
import CreateRoom from './CreateRoom';
import EnterRoom from './EnterRoom';
import GamePage from './GamePage';
import Welcome from './Welcome';

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
  }

  render() {
    debugger;
    return (
      <div className="welcome-page">
        { this.state.showWelcome ? <Welcome onCreateRoom={ this.createRoom } onEnterRoom={ this.enterRoom }/> : null }
        { this.state.showCreateRoom ? <CreateRoom onSubmit={ this.enterRoom } onClose={ this.closeCreateRoom }/> : null }
        { this.state.showEnterRoom ? <EnterRoom onSubmit={ this.enterGamePage }/> : null }
        { this.state.showGame ? <GamePage /> : null }
      </div>
    );
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
      showCreateRoom: false
    });
  }
}
