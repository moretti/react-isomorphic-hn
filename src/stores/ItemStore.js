import Marty, { Store } from 'marty';
import Immutable, { List, Map } from 'immutable';
import ItemConstants from '../constants/ItemConstants';
import ItemQueries from '../queries/ItemQueries';

//export default class ItemStore extends Store {
// Not supported yet

const ItemStore = Marty.createStore({
  id: 'ItemStore',
  handlers: {
    _handleReceiveItem: ItemConstants.RECEIVE_ITEM_DONE,
    _handleGetTopStories: ItemConstants.RECEIVE_TOP_STORIES_DONE
  },

  getInitialState: function () {
    return new Map({
      topStories: new List(),
      items: new Map(),
    });
  },

  _handleGetTopStories(topStories) {
    // TODO: implement pagination
    this.state = this.state.set('topStories', new List(topStories.slice(0, 30)));
  },

  _handleReceiveItem(item) {
    this.state = this.state.update('items', items => items.set(item.id, Immutable.fromJS(item)));
  },

  getTopStories() {
    return this.fetch({
      id: 'topStories',
      locally() {
        if (this.hasAlreadyFetched('topStories')) {
          return this.state.get('topStories');
        }
      },
      remotely() {
        return ItemQueries.for(this).getTopStories();
      }
    });
  },

  getItem(id) {
    return this.fetch({
      id: id,
      locally() {
        return this.state.get('items').get(id);
      },
      remotely() {
        return ItemQueries.for(this).getItem(id);
      }
    });
  },

  dehydrate() {
    return this.state.toJS();
  },

  rehydrate(dehydratedState) {
    this.state = Immutable.fromJS(dehydratedState);
  },
});

export default ItemStore;
