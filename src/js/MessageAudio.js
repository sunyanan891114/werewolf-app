import React, {Component} from 'react';
import {baiduAudio} from './config/config';

export default class MessageAudio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameProcess: ""
    };
  }

  render() {
    return this.props.voice ? this.renderAudioTag() : null;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      gameProcess: nextProps.gameProcess
    });
  }

  shouldComponentUpdate(nextProps) {
    return this.props.gameProcess !== nextProps.gameProcess;
  }

  componentDidUpdate() {
    if (this.props.voice) {
      document.querySelector('.audio-message').play();
    }
  }

  renderAudioTag() {
    return (
      <audio controls autoPlay name="media" style={{display: "none"}} className="audio-message">
        <source src={ baiduAudio(this.state.gameProcess) } type="audio/mp3"/>
      </audio>
    )
  }
}
