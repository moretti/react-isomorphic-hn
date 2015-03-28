import Marty from 'marty';
import ItemStore from '../stores/ItemStore';
import StoryListItem from './StoryListItem';
import React from 'react';

const StoryListItemContainer = Marty.createContainer(StoryListItem, {
  listenTo: ItemStore,

  /*contextTypes: {
    storyId: React.PropTypes.number.isRequired
  },*/

  fetch: {
    story() {
      return ItemStore.for(this).getItem(this.props.storyId);
    }
  },

  pending() {
    return <div>Loading...</div>;
  },

});

export default StoryListItemContainer;
