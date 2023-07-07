const { evaluateGuess } = require('../src/turn');

function createRound(deck) {
  const round = {
    deck: deck,
    currentCard: deck[0],
    turns: 0,
    incorrectGuesses: [],
  };
  return round;
}

function takeTurn(guess, round) {
  const feedback = evaluateGuess(guess, round.currentCard.correctAnswer);
  if (feedback === 'incorrect!') {
    round.incorrectGuesses.push(round.currentCard.id);
  }
  round.turns += 1;
  round.currentCard = round.deck[round.turns];
  return feedback;
}

function calculatePercentCorrect(round) {
  const percentCorrect =
    ((round.turns - round.incorrectGuesses.length) / round.turns) * 100;
  return percentCorrect;
}

function endRound(round) {
  const message = `**Round Over! **You answered ${calculatePercentCorrect(
    round
  )}% of the questions correctly!`;
  console.log(message);
  return message;
}

module.exports = {
  createRound,
  takeTurn,
  calculatePercentCorrect,
  endRound,
};
