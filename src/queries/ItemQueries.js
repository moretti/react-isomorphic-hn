import Marty, { Queries } from 'marty';
import HN from '../api/HN';
import ItemConstants from '../constants/ItemConstants';

//export default class ItemQueries extends Queries {
// Not supported yet

const ItemQueries = Marty.createQueries({
  id: 'ItemQueries',
  getTopStories() {
    this.dispatch(ItemConstants.RECEIVE_TOP_STORIES_STARTING);
    return HN.for(this).getTopStories()
      .then(res => this.dispatch(ItemConstants.RECEIVE_TOP_STORIES_DONE, res))
      .catch(err => this.dispatch(ItemConstants.RECEIVE_TOP_STORIES_FAILED, err));
  },

  getItem(itemId) {
    this.dispatch(ItemConstants.RECEIVE_ITEM_STARTING, itemId);
    return HN.for(this).getItem(itemId)
      .then(res => this.dispatch(ItemConstants.RECEIVE_ITEM_DONE, res))
      .catch(err => this.dispatch(ItemConstants.RECEIVE_ITEM_FAILED, err));
  }

});

export default ItemQueries;
