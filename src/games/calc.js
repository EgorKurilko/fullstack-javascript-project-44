import runGame from '../index.js';

import { getRandomNumber } from '../utils.js';

const description = 'What is the result of the expression?';

const operators = ['+', '-', '*'];

const calculateExpression = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      throw new Error(`Unknown order state: '${operator}'!`);
  }
  return result;
};

const getQuestionAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${num1} ${operator} ${num2}`;
  const answer = calculateExpression(num1, num2, operator);
  return [question, answer];
};

const runGameCalc = () => runGame(description, getQuestionAnswer);

export default runGameCalc;
