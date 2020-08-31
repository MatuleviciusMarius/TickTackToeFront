import axios from 'axios';

const url = 'http://localhost:8080';

export const getAllMoves = async () => {
  let getAllUrl = `${url}/api/allMoves`;
  try {
    const moves = await axios.get(getAllUrl);
    return moves;
  } catch (err) {
    console.log(err);
  }
};

export const makeAMove = async (move) => {
  let newMoveUrl = `${url}/api/newMove`;
  try {
    const res = await axios.post(newMoveUrl, { position: move.position, symbol: move.symbol });
    return res;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const resetGame = async () => {
  let newDeleteUrl = `${url}/api/deleteAll`;
  try {
    const res = await axios.delete(newDeleteUrl);
    return res;
  } catch (err) {
    console.log(err);
  }
};
