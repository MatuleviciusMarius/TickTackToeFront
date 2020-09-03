import axios from 'axios';

const url = 'http://localhost:8080';

let config = {
  headers: {"Access-Control-Allow-Origin": "*"}
}

export const getAllMoves = async () => {
  let getAllUrl = `${url}/api/allMoves`;
  try {
    const moves = await axios.get(getAllUrl, config);
    console.log(moves);
    return moves;
  } catch (err) {
    console.log(err);
  }
};

export const makeAMove = async (move) => {
  let newMoveUrl = `${url}/api/newMove`;
  try {
    console.log("Make a move");
    const res = await axios.post(newMoveUrl, { position: move.position, symbol: move.symbol }, config);
    return res;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export const resetGame = async () => {
  let newDeleteUrl = `${url}/api/deleteAll`;
  try {
    const res = await axios.delete(newDeleteUrl, config);
    return res;
  } catch (err) {
    console.log(err);
  }
};
