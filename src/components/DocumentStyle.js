import React, { Component } from 'react';
import CSSPropertyOperations from 'react/lib/CSSPropertyOperations';
import forIn from 'lodash/object/forIn';

export default class DocumentStyle extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let styleSheet = [];
    forIn(this.props.styles, (styles, selector) => {
      let markup = CSSPropertyOperations.createMarkupForStyles(styles);
      styleSheet.push(`${selector} { ${markup} }`);
    });
    styleSheet = styleSheet.join('\n');

    return (
      <div>
        <style scoped dangerouslySetInnerHTML={{
          __html: styleSheet
          }}>
        </style>
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

DocumentStyle.defaultProps = {
  styles: {}
};
