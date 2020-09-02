import React from 'react';
import ReactDOM from 'react-dom';
import Cell from '../Cell';
import { render, getByTestId } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Cell />, div);
});

it('renders button correctly with mocked data', () => {
  const mockClass = jest.fn();
  mockClass.mockReturnValue(1);

  const { getByTestId } = render(<Cell position={1} sendNewMove={mockClass} findMoveByPosition={mockClass} />);

  expect(getByTestId('cell')).toHaveTextContent('1');
});
