import React from 'react';
import WitchPage from './WitchPage';
import ProphetPage from './ProphetPage';
import HunterPage from './HunterPage';
import {send} from '../util/webSocket'

export default (role) => {
  const sendAction = (action) => {
    send('/app/join', {value: action});
  };

  switch (role) {
    case "witch" :
      return <WitchPage sendAction={sendAction}/>;
    case "prophet":
      return <ProphetPage sendAction={sendAction}/>;
    case "hunter":
      return <HunterPage sendAction={sendAction}/>;
  }
}
