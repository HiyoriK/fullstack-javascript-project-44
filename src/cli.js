import readlineSync from 'readline-sync';

const welcomePlayer = () => {
  console.log('Welcome to the Brain Games!');
  const playerName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${playerName}!`);
  return playerName;
};

export default welcomePlayer;
