function evaluateGuess(guess, correctAnswer) {
  if (guess === correctAnswer) {
    console.log('correct!');
    return 'correct!';
  } else {
    console.log('incorrect!');
    return 'incorrect!';
  }
}

module.exports = {
  evaluateGuess,
};
