import React from 'react';

import { Grid, Paper, Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    minHeight: 100,
  },
}));

function Cell({ position, sendNewMove, findMoveByPosition }) {
  const classes = useStyles;

  return position ? (
    <Grid item xs={4} min-height='100'>
      <Paper className={classes.paper}>
        <Button data-testid='cell' variant='outlined' height='100' onClick={() => sendNewMove(position)}>
          {findMoveByPosition(position)}
        </Button>
      </Paper>
    </Grid>
  ) : (
    'Loading'
  );
}

export default Cell;
