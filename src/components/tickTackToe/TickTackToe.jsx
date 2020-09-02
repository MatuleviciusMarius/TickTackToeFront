import React from 'react';

import { Cell } from '../';
import { Grid } from '@material-ui/core';
import { makeAMove } from '../../api/index';

class TickTackToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      moves: [],
      currentMoveSymbol: 'X',
    };
  }

  findMoveByPosition = (position) => {
    return this.props.moves.map((move) => {
      if (move.position === position) return move.symbol;
    });
  };

  sendNewMove = async (position) => {
    const move = { position: position, symbol: this.state.currentMoveSymbol };
    const res = await makeAMove(move);

    if (res == false) {
      return;
    } else {
      if (this.state.currentMoveSymbol === 'X') this.setState({ ...this.state, currentMoveSymbol: 'O' });
      else {
        this.setState({ ...this.state, currentMoveSymbol: 'X' });
      }
    }
    this.props.updateMoves();
  };

  render() {
    return this.state.isLoading ? (
      <div>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Cell position={1} sendNewMove={this.sendNewMove} findMoveByPosition={this.findMoveByPosition} />
            <Cell position={2} sendNewMove={this.sendNewMove} findMoveByPosition={this.findMoveByPosition} />
            <Cell position={3} sendNewMove={this.sendNewMove} findMoveByPosition={this.findMoveByPosition} />
          </Grid>

          <Grid container item xs={12} spacing={3}>
            <Cell position={4} sendNewMove={this.sendNewMove} findMoveByPosition={this.findMoveByPosition} />
            <Cell position={5} sendNewMove={this.sendNewMove} findMoveByPosition={this.findMoveByPosition} />
            <Cell position={6} sendNewMove={this.sendNewMove} findMoveByPosition={this.findMoveByPosition} />
          </Grid>

          <Grid container item xs={12} spacing={3}>
            <Cell position={7} sendNewMove={this.sendNewMove} findMoveByPosition={this.findMoveByPosition} />
            <Cell position={8} sendNewMove={this.sendNewMove} findMoveByPosition={this.findMoveByPosition} />
            <Cell position={9} sendNewMove={this.sendNewMove} findMoveByPosition={this.findMoveByPosition} />{' '}
          </Grid>
        </Grid>
      </div>
    ) : (
      'Loading...'
    );
  }
}

export default TickTackToe;
