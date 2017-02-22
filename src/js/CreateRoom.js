import React from 'react';
import {send} from './util/webSocket';

const CreateRoom = ({onSubmit, onClose}) => {
  const submit = (e) => {
    e.preventDefault();
    send('/app/create', new FormData(document.querySelector('.game-config')));
    onSubmit();
  };

  return (
    <form className="game-config" onSubmit={ submit } method="post">
      <label className="form-element">
        <span>人数：</span>
        <input type="number" name="number" className="game-config__input" min={0}/>
      </label>
      <div className="form-element">
        <span className="role">角色：</span>
        <label><input type="checkbox" className="game-config__checkbox" value="1" name="hunter"/>猎人</label>
        <label><input type="checkbox" className="game-config__checkbox" value="1" name="prophet"/>预言家</label>
        <label><input type="checkbox" className="game-config__checkbox" value="1" name="wizard"/>女巫</label>
      </div>
      <label className="form-element">
        <span>村民：</span>
        <input type="number" className="game-config__input" name="villager" min={0}/>
      </label>
      <label className="form-element">
        <span>狼人：</span>
        <input type="number" className="game-config__input" name="werewolf" min={0}/>
      </label>
      <div className="game-config__buttons">
        <button type="submit" className="game-config__button">确定</button>
        <button type="button" className="game-config__button" onClick={ onClose }>取消
        </button>
      </div>
    </form>
  );
};

export default CreateRoom;
