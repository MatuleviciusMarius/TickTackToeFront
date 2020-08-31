import React from 'react';

import { Grid, Paper, makeStyles, Button } from '@material-ui/core';
import { makeAMove } from '../../api/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class TickTackToe extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      moves: [],
      currentMoveSymbol: 'X',
    };
  }
  classes = useStyles;

  findMoveByPosition = (position) => {
    return this.props.moves.map((move) => {
      if (move.position === position) return move.symbol;
    });
  };

  async sendNewMove(position) {
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
  }

  render() {
    return this.state.isLoading ? (
      <div className={this.classes.root}>
        <Grid container spacing={1}>
          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <Paper className={this.classes.paper}>
                <Button variant='outlined' onClick={() => this.sendNewMove(1)}>
                  {this.findMoveByPosition(1) || 'Hello'}
                </Button>
              </Paper>
            </Grid>{' '}
            <Grid item xs={4}>
              <Paper className={this.classes.paper}>
                <Button variant='outlined' onClick={() => this.sendNewMove(2)}>
                  {this.findMoveByPosition(2)}
                </Button>
              </Paper>
            </Grid>{' '}
            <Grid item xs={4}>
              <Paper className={this.classes.paper}>
                <Button variant='outlined' onClick={() => this.sendNewMove(3)}>
                  {this.findMoveByPosition(3)}
                </Button>
              </Paper>
            </Grid>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <Paper className={this.classes.paper}>
                <Button variant='outlined' onClick={() => this.sendNewMove(4)}>
                  {this.findMoveByPosition(4)}
                </Button>
              </Paper>
            </Grid>{' '}
            <Grid item xs={4}>
              <Paper className={this.classes.paper}>
                <Button variant='outlined' onClick={() => this.sendNewMove(5)}>
                  {this.findMoveByPosition(5)}
                </Button>
              </Paper>
            </Grid>{' '}
            <Grid item xs={4}>
              <Paper className={this.classes.paper}>
                <Button variant='outlined' onClick={() => this.sendNewMove(6)}>
                  {this.findMoveByPosition(6)}
                </Button>
              </Paper>
            </Grid>
          </Grid>

          <Grid container item xs={12} spacing={3}>
            <Grid item xs={4}>
              <Paper className={this.classes.paper}>
                <Button variant='outlined' onClick={() => this.sendNewMove(7)}>
                  {this.findMoveByPosition(7)}
                </Button>
              </Paper>
            </Grid>{' '}
            <Grid item xs={4}>
              <Paper className={this.classes.paper}>
                <Button variant='outlined' onClick={() => this.sendNewMove(8)}>
                  {this.findMoveByPosition(8)}
                </Button>
              </Paper>
            </Grid>{' '}
            <Grid item xs={4}>
              <Paper className={this.classes.paper}>
                <Button variant='outlined' onClick={() => this.sendNewMove(9)}>
                  {this.findMoveByPosition(9)}
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    ) : (
      'Loading...'
    );
  }
}

export default TickTackToe;
