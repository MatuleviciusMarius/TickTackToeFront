import React from 'react';
import { getAllMoves, resetGame } from './api';
import { checkEndGame } from './utils/checkForEndGame';

import { TickTackToe, MoveLog } from './components';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      moves: [],
    };
  }
  updateMoves = async () => {
    this.setState({ ...this.state, isLoading: true });
    let moves = await getAllMoves();
    moves = moves.data.moves;
    this.setState({ ...this.state, moves: moves, isLoading: false });
    const endGame = checkEndGame(moves);
    if (endGame) {
      resetGame();
      this.updateMoves();
      alert(endGame);
    }
  };

  render() {
    const { isLoading, moves } = this.state;

    return (
      <div>
        <TickTackToe isLoading={isLoading} moves={moves} updateMoves={this.updateMoves} />
        <MoveLog isLoading={isLoading} moves={moves} />
      </div>
    );
  }

  async componentDidMount() {
    let moves = await getAllMoves();
    moves = moves.data.moves;
    this.setState({ ...this.state, isLoading: false, moves: moves });
  }
}

export default App;
