import React from 'react';
import { RouteHandler } from 'react-router';
import Header from './components/Header';
import DocumentStyle from './components/DocumentStyle';
import AppStyle from './AppStyle';
import { Colors } from './AppTheme';

const Style = {
  page: {
    width: '85%',
    margin: '0px auto',
  },
  container: {
    display: 'flex',
    backgroundColor: Colors.background,
  }
};

const App = React.createClass({
  render() {
    return (
      <DocumentStyle styles={AppStyle}>
        <div style={Style.page}>
          <Header/>
          <div style={Style.container}>
            <RouteHandler/>
          </div>
        </div>
      </DocumentStyle>
    );
  }
});

export default App;
