import playGame from '../game.js';
import getRandomInRange from '../utils.js';

const getProgression = (a, quantity, difference) => {
  const numbers = [];
  for (let i = 1; i <= (quantity - 1); i += 1) {
    numbers.push(a + difference * i);
  }
  return numbers;
};

const startProgression = () => {
  const firstNumber = getRandomInRange(1, 100);
  const numberOfMembers = getRandomInRange(6, 15);
  const step = getRandomInRange(2, 4);
  const progression = getProgression(firstNumber, numberOfMembers, step);
  const index = getRandomInRange(1, numberOfMembers);
  const rightAnswer = String(progression[index - 1]);
  progression[index - 1] = '..';
  const question = progression.join(' ');
  return [question, rightAnswer];
};

const playProgressionGame = () => {
  const gameTask = 'What number is missing in the progression?';
  playGame(startProgression, gameTask);
};

export default playProgressionGame;
