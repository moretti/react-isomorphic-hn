import React, { Component } from 'react';
import StoryContainer from '../components/StoryContainer';

export default class StoryPage extends Component {
  render() {
    let storyId = parseInt(this.context.router.getCurrentParams().storyId);
    return (
      <div>
        <StoryContainer storyId={storyId} />
      </div>
    );
  }
}

StoryPage.contextTypes = {
  router: React.PropTypes.func
};
