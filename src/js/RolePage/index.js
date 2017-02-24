import React from 'react';
import WitchPage from './WitchPage';
import ProphetPage from './ProphetPage';
import HunterPage from './HunterPage';
import CommonPage from './CommonPage';

const dispatchRole = ({...props}) => {
  if (props.daylight) return <CommonPage {...props}/>;
  switch (props.role) {
    case"witch":
      return <WitchPage {...props}/>;
    case"prophet":
      return <ProphetPage {...props}/>;
    case "hunter":
      return <HunterPage {...props}/>;
    case "werewolf":
      return <CommonPage {...props}/>;
  }
};

export default dispatchRole;
