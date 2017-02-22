import React from 'react';
import WitchPage from './WitchPage';
import ProphetPage from './ProphetPage';
import HunterPage from './HunterPage';

export default (role) => {
  switch (role) {
    case "witch" :
      return <WitchPage />;
    case "prophet":
      return <ProphetPage />;
    case "hunter":
      return <HunterPage />;
  }
}
