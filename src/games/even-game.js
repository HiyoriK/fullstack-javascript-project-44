#!/usr/bin/env node

import readlineSync from 'readline-sync';
import playerName from '../cli.js';
import playGame from '../game.js';

const showRandomNumber = (min = 0, max = 100) => {
  const result = Math.floor(Math.random() * (max - min) + min);
  return result;
};
const gameTask = 'Answer "yes" if the number is even, otherwise answer "no".';

const startEven = () => {
  for (let i = 0; i < 3; i += 1) {
    const question = showRandomNumber(0, 100);
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isEven = (num) => (num % 2 === 0);

    const rightAnswer = (isEven(question)) ? 'yes' : 'no';

    if (rightAnswer !== userAnswer) {
      console.log(`'${userAnswer}' is wrong asnwer ;(. The Correct answer is '${rightAnswer}'\nLet's try again!, ${playerName}`);
    } else {
      console.log('Correct!');
    }
  }
};

const playEvenGame = () => {
  playGame(startEven, gameTask);
};

export default playEvenGame;
