import React, { Component } from 'react';
import { List } from 'immutable';
import Marty from 'marty';
import ItemStore from '../stores/ItemStore';
import StoryListItemContainer from './StoryListItemContainer';
import StoryListItem from './StoryListItem';
import { Colors } from '../AppTheme';


const Style = {
  listNumber: {
    color: Colors.secondary,
    margin: 0,
    padding: '0 0 0 35px',
  },

  listItem: {
    color: Colors.text
  }
};

class StoryList extends Component {
  constructor(props) {
    super(props);
  }

  renderStory(storyId) {
    return (
      <li key={storyId}>
        <div style={Style.listItem}>
          <StoryListItemContainer storyId={storyId}/>
        </div>
      </li>
    );
  }

  render() {
    return (
      <ol style={Style.listNumber}>
        {this.props.storyIds.map(this.renderStory)}
      </ol>
    );
  }
}

StoryList.defaultProps = {
  storyIds: new List(),
};

const StoryListContainer = Marty.createContainer(StoryList, {
  listenTo: ItemStore,

  fetch() {
    return {
      storyIds: ItemStore.for(this).getTopStories()
    };
  },

  pending() {
    return <div>Loading...</div>;
  },

});

export default StoryListContainer;
