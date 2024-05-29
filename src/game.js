import readlineSync from 'readline-sync';
import playerName from './cli.js';

const playGame = (roundCounter, task) => {
  console.log(`Hello, ${playerName}!`);
  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    const [question, rightAnswer] = roundCounter();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong asnwer ;(. The Correct answer is '${rightAnswer}'\nLet's try again!, ${playerName}`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
