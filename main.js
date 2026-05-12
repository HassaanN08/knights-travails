import knightMoves from "./app.js";

const moves = knightMoves([2, 2], [1, 1]);

console.log(`You made it in ${moves} moves. Here's your path:`);

moves.forEach((move) => {
    console.log(move);
})