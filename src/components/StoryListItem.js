import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { Map } from 'immutable';
import URI from 'URIjs'
import TimeAgo from 'react-timeago';
import { Colors } from '../AppTheme';

function getDomain(url) {
  return new URI(url).domain();
}

const Style = {
  article: {
    padding: '8px 0 0 2px'
  },

  title: {
    fontSize: 14,
  },

  meta: {
    fontSize: 10,
    color: Colors.secondary
  },

  metaLink: {
    color: Colors.secondary
  },

  domain: {
    color: Colors.secondary,
    fontSize: 11,
  }
};

export default class StoryListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { story } = this.props;

    return (
      <article style={Style.article}>
        <div>
          <a style={Style.title} href={story.get('url')}>{story.get('title')}</a>
          <span style={Style.domain}> ({getDomain(story.get('url'))})</span>
        </div>
        <div style={Style.meta}>
          <span>{story.get('score')} points by {story.get('by')}</span>
          {' '}
          <Link style={Style.metaLink} to="item" params={{storyId: story.get('id')}}>
            <TimeAgo date={story.get('time') * 1000}/>
          </Link>
          {' | '}
          <Link style={Style.metaLink} to="item" params={{storyId: story.get('id')}}>
            {story.get('kids') ? `${story.get('kids').size} comments` : 'discuss'}
          </Link>
        </div>
      </article>
    );
  }
}

StoryListItem.propTypes = {
  story: React.PropTypes.instanceOf(Map).isRequired
};
