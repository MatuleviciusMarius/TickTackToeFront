import React from 'react';
import ReactDOM from 'react-dom';
import Cell from '../Cell';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cell />, div);
});
