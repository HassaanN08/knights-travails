import knightMoves from "./app.js";

const moves = knightMoves([4, 4], [0, 0]);

console.log(`You made it in ${moves.size - 1} moves. Here's your path:`);

moves.forEach((move) => {
    console.log(move);
})