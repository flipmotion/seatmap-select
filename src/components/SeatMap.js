import React, { Component } from 'react';
import { Map, Set } from 'immutable';
import Row from './Row';
import Seat from './Seat';
import Blank from './Blank';

export default class SeatMap extends Component {
  constructor(props) {
    super(props);

    const {
      rows,
    } = props;

    this.state = {
      selectedSeats: Map(),
      size: 0,
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.selectedSeats !== this.state.selectedSeats;
  }

  selectSeat = (row, number) => {
    const { selectedSeats, size } = this.state;
    const { maxReservableSeats } = this.props;
    const seatAlreadySelected = selectedSeats.get(row, Set()).includes(number);

    if (size < maxReservableSeats && !seatAlreadySelected) {
      this.setState({
        selectedSeats: selectedSeats.mergeDeep({[row]: Set([number])}),
        size: size + 1
      });
    } else if (selectedSeats.has(row) && seatAlreadySelected) {
      this.setState({
        selectedSeats: selectedSeats.update(row, seats => seats.delete(number)),
        size: size - 1
      })
    }
  };

  render() {
    const { selectedSeats: seats } = this.state;

    return this.props.rows.map((row, index) => {
      const rowNumber = (index + 1).toString();
      const isSelected = !seats.get(rowNumber, Set()).isEmpty();
      const props = {
        rowNumber,
        isSelected,
        selectedSeat: null,
        seats: row,
        key: `Row${rowNumber}`,
        selectSeat: this.selectSeat
      };

      return (
        <Row {...props}>
          {this.renderSeats(row, rowNumber, isSelected)}
        </Row>
      );
    });
  };

  renderSeats(seats, rowNumber, isRowSelected) {
    const { selectedSeats, size } = this.state;
    const { maxReservableSeats } = this.props;

    return seats.map((seat, index) => {
      if (seat === null) return <Blank key={index}/>;
      const isSelected = isRowSelected && selectedSeats.get(rowNumber).includes(seat.number);
      const props = {
        isSelected,
        isReserved: seat.isReserved,
        isEnabled: size < maxReservableSeats,
        selectSeat: this.selectSeat.bind(this, rowNumber, seat.number),
        seatNumber: seat.number,
        key: index
      };
      return <Seat {...props} />;
    });
  }
}
