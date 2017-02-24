import React from 'react';
import WitchPage from './WitchPage';
import ProphetPage from './ProphetPage';
import HunterPage from './HunterPage';
import CommonPage from './CommonPage';
import WerewolfPage from './WerewolfPage';

const dispatchRole = ({...props}) => {
  if (props.daylight) {
    return props.role == 'hunter' && props.kill.useSkill ?  <HunterPage {...props}/> : <CommonPage {...props}/>;
  }
  switch (props.role) {
    case"witch":
      return <WitchPage {...props}/>;
    case"prophet":
      return <ProphetPage {...props}/>;
    case "hunter":
      return <HunterPage {...props}/>;
    case "werewolf":
      return <WerewolfPage {...props}/>;
  }
};

export default dispatchRole;
