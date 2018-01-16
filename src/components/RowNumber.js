import React, { Component } from 'react';

export default class RowNumber extends Component {

  render() {
    return (
      <div
        className="RowNumber"
      >
        {this.props.rowNumber}
      </div>
    );
  }
}
