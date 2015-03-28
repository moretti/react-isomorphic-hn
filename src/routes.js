import React from 'react';
import { Route, DefaultRoute, NotFoundRoute } from 'react-router';

import App from './App';
import StoryListPage from './pages/StoryListPage';
import StoryPage from './pages/StoryPage';
import NotFoundPage from './pages/NotFoundPage';

const routes = (
  <Route name="app" path="/" handler={App}>
    <DefaultRoute handler={StoryListPage}/>
    <Route name="item" path="/item/:storyId" handler={StoryPage}/>
    {/*<NotFoundRoute handler={NotFoundPage}/>*/}
  </Route>
);

export default routes;
