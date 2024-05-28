import playerName from './cli.js';

const playGame = (game, task) => {
  console.log(task);
  game();
  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
