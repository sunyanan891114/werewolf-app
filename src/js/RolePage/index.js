import React from 'react';
import WitchPage from './WitchPage';
import ProphetPage from './ProphetPage';
import HunterPage from './HunterPage';

const dispatchRole = ({...props}) => {
  switch (props.role) {
    case"witch":
      return <WitchPage {...props}/>;
    case"prophet":
      return <ProphetPage {...props}/>;
    case "hunter":
      return <HunterPage {...props}/>;
  }
};

export default dispatchRole;
