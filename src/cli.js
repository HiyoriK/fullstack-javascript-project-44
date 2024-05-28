import readlineSync from 'readline-sync';

console.log('Welcome to the Brain Games!');
const playerName = readlineSync.question('May I have your name?: ');

export default playerName;
