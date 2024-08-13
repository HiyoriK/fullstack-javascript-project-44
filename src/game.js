import readlineSync from 'readline-sync';
import welcomePlayer from './cli.js';

const roundsCount = 3;

const playGame = (generateRound, task) => {
  const userName = welcomePlayer();
  console.log(task);
  for (let i = 0; i < roundsCount; i += 1) {
    const [question, rightAnswer] = generateRound();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong asnwer ;(. The Correct answer is '${rightAnswer}'\nLet's try again, ${userName}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
