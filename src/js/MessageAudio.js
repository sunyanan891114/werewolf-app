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
    return this.props.voice? this.renderAudioTag() : null;
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      gameProcess: nextProps.gameProcess
    });
  }

  playAudio=()=>{
    return document.querySelector('.audio-message').play();
  };

  componentDidMount(){
    document.addEventListener('touchstart', () => {
      this.playAudio();
    }, false);
  }

  componentWillUnmount(){
    document.removeEventListener('touchstart', () => {
      this.playAudio();
    }, false);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.gameProcess !== nextProps.gameProcess;
  }

  componentDidUpdate() {
    if (this.props.voice) {
      this.refs.audio.load();
    }
  }

  renderAudioTag() {
    return (
      <audio controls autoPlay name="media" style={{display: "none"}} className="audio-message" ref="audio">
        <source key={Date.parse(new Date())} src={ baiduAudio(this.state.gameProcess) } type="audio/mp3"/>
      </audio>
    )
  }
}
