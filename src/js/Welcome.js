import React from 'react';

const Welcome = ({onCreateRoom, onEnterRoom}) => {
  return (
    <div className="welcome-page">
      <h1 className="title">狼人杀</h1>
      <button className="create-room-btn" onClick={ onCreateRoom }>创建房间</button>
      <button className="enter-room-btn" onClick={ onEnterRoom }>进入房间</button>
    </div>
  );
};

Welcome.propTypes = {
  onCreateRoom: React.PropTypes.func.isRequired,
  onEnterRoom: React.PropTypes.func.isRequired
};

export default Welcome;
