import React from 'react';

const Welcome = ({onCreateRoom, onEnterRoom}) => {
  return (
    <div className="welcome">
      <h1 className="welcome__title">狼人杀</h1>
      <button className="welcome__button create-room-btn" onClick={ onCreateRoom }>创建房间</button>
      <button className="welcome__button enter-room-btn" onClick={ onEnterRoom }>进入房间</button>
    </div>
  );
};

Welcome.propTypes = {
  onCreateRoom: React.PropTypes.func.isRequired,
  onEnterRoom: React.PropTypes.func.isRequired
};

export default Welcome;
