import React from 'react';
import { ListItem, List, ListItemText } from '@material-ui/core';

class MoveLog extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      moves: [],
    };
  }

  log = () => {
    const orderedMoves = this.props.moves.sort((a, b) => a.date - b.date);

    return orderedMoves.map((move) => {
      return (
        <ListItem button>
          <ListItemText primary={`Symbol: ${move.symbol} Position: ${move.position}`} />
        </ListItem>
      );
    });
  };

  render() {
    return this.state.isLoading ? (
      <div>
        <List>{this.log()}</List>
      </div>
    ) : (
      'Loading...'
    );
  }
}

export default MoveLog;
