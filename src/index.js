import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SeatMap from './components/SeatMap';

const defaultRows = [
  [
    {number: '1A', isReserved: false},
    {number: '2A', isReserved: false},
    {number: '3A', isReserved: false},
    null,
    {number: '4A', isReserved: false},
    {number: '5A', isReserved: false},
    {number: '6A', isReserved: false},
  ],
  [
    {number: '1A', isReserved: false},
    {number: '2A', isReserved: false},
    {number: '3A', isReserved: false},
    null,
    {number: '4A', isReserved: false},
    {number: '5A', isReserved: false},
    {number: '6A', isReserved: false},
  ],
  [
    {number: '1A', isReserved: false},
    {number: '2A', isReserved: false},
    {number: '3A', isReserved: false},
    null,
    {number: '4A', isReserved: false},
    {number: '5A', isReserved: false},
    {number: '6A', isReserved: false},
  ],
  [
    {number: '1A', isReserved: false},
    {number: '2A', isReserved: false},
    {number: '3A', isReserved: false},
    null,
    {number: '4A', isReserved: false},
    {number: '5A', isReserved: false},
    {number: '6A', isReserved: false},
  ],
  [
    {number: '1A', isReserved: false},
    {number: '2A', isReserved: false},
    {number: '3A', isReserved: false},
    null,
    {number: '4A', isReserved: false},
    {number: '5A', isReserved: false},
    {number: '6A', isReserved: false},
  ],
  [
    {number: '1A', isReserved: false},
    {number: '2A', isReserved: false},
    {number: '3A', isReserved: false},
    null,
    {number: '4A', isReserved: false},
    {number: '5A', isReserved: false},
    {number: '6A', isReserved: false},
  ],
  [
    {number: '1A', isReserved: false},
    {number: '2A', isReserved: false},
    {number: '3A', isReserved: false},
    null,
    {number: '4A', isReserved: false},
    {number: '5A', isReserved: false},
    {number: '6A', isReserved: false},
  ],
  [
    {number: '1A', isReserved: false},
    {number: '2A', isReserved: false},
    {number: '3A', isReserved: false},
    null,
    {number: '4A', isReserved: false},
    {number: '5A', isReserved: false},
    {number: '6A', isReserved: false},
  ],
  [
    {number: '1A', isReserved: false},
    {number: '2A', isReserved: false},
    {number: '3A', isReserved: false},
    null,
    {number: '4A', isReserved: false},
    {number: '5A', isReserved: false},
    {number: '6A', isReserved: false},
  ],
]


const newRow = [
  [
    {number: '1A', isReserved: true},
    {number: '2A', isReserved: true},
    {number: '3A', isReserved: true},
    null,
    {number: '4A', isReserved: true},
    {number: '5A', isReserved: true},
    {number: '6A', isReserved: true},
  ],
]

const rows = [
  ...newRow,
  ...defaultRows
];

const rootNode = document.getElementById('root');

ReactDOM.render(
  <SeatMap
    rows={rows}
    maxReservableSeats={3}
  />,
  rootNode
);

