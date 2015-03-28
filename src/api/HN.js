import Firebase from 'firebase';
import invariant from 'react/lib/invariant';
import Marty, { HttpStateSource } from 'marty';

const api = new Firebase('https://hacker-news.firebaseio.com/v0');

// We're treating Firebase like a REST endpoint
// TODO Support live updates using `on` instead of `once`
function promisify(endpoint) {
  return new Promise(function (resolve, reject) {
    endpoint.once('value', resolve, reject);
  }).then(res => res.val()); // typeof res is DataSnapshot (https://www.firebase.com/docs/web/api/datasnapshot/)

}

//export default class HN extends HttpStateSource {
// not supported yet

const HN = Marty.createStateSource({
  type: 'http',
  id: 'HNAPI',

  getTopStories() {
    return promisify(api.child('topstories'));
  },

  getItem(id) {
    invariant(typeof id !== 'undefined', 'id is required');
    return promisify(api.child('item/' + id));
  }
});

export default HN;
