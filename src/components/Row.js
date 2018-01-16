import React, { Component } from 'react';
import cx from 'classnames';
import Seat from './Seat';
import Blank from './Blank';
import RowNumber from './RowNumber';

export default class Row extends Component {
  render() {
    const {
      rowNumber,
      isSelected
    } = this.props;

    const className = cx('Row', {
      'Row--enabled': !isSelected,
      'Row--selected': isSelected,
    });

    return (
      <div
        className={className}
      >
        <RowNumber
          rowNumber={rowNumber}
        />
        {this.props.children}
      </div>
    );
  }
}
