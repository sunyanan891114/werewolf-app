import React, {Component} from 'react';
import { send } from './util/webSocket';

export default class CreateRoom extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <form className="game-config" onSubmit={ this.onSubmit } method="post">
        <label className="form-element">
          <span>人数：</span>
          <input type="number" name="number" className="game-config__input" placeholder="number"/>
        </label>
        <span className="role">角色：</span>
        <label><input type="checkbox" className="game-config__input" value="1" name="hunter"/>猎人</label>
        <label><input type="checkbox" className="game-config__input" value="1" name="prophet"/>预言家</label>
        <label><input type="checkbox" className="game-config__input" value="1" name="wizard"/>女巫</label>

        <label><span>村民</span><input type="number" className="game-config__input" name="villager"/></label>
        <label><span>狼人</span><input type="number" className="game-config__input" name="werewolf"/></label>
        <div className="game-config__buttons">
          <button type="submit" ref="submit" className="game-config_button">确定</button>
          <button type="button" className="sign-in-form__button rui-button-basic" onClick={ this.props.onClose }>取消
          </button>
        </div>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    send('/app/create', new FormData(document.querySelector('.game-config')));
    this.props.onSubmit();
  }
}
