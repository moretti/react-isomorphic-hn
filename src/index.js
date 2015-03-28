import React from 'react';
import Router from 'react-router';
import routes from './routes';
import Marty from 'marty';

//window.Marty = Marty; // enable Marty Developer Tools

function getLocation() {
  return process.env.NODE_ENV === 'production' ?
    Router.HistoryLocation :
    Router.HashLocation;
}

/*let Dispatcher = Marty.dispatcher.getDefault();
Dispatcher.onActionDispatched(function (action) {
  console.log(action);
});*/

Marty.rehydrate();

Router.run(routes, getLocation(), (Handler, state) => {
  React.render(<Handler />, document.getElementById('root'));
});
