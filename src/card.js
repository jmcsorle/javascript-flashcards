function createCard(idNum, cardQuestion, answerChoices, correctAnswer) {
  return {
    id: idNum,
    question: cardQuestion,
    answers: answerChoices,
    correctAnswer: correctAnswer,
  };
}

module.exports = {
  createCard,
};
