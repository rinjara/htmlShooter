class LevelProgress {
  constructor(targetScore) {
    this.targetScore = targetScore;
    this.score = 0;
    this.messageElement = document.getElementById('level-progress-message');

    this.updateMessage();
  }

  incrementScore() {
    this.score++;
    this.updateMessage();
  }

  updateMessage() {
    if (this.score >= this.targetScore) {
      this.messageElement.textContent =
        'Congratulations! You have reached the next level.';
    } else {
      this.messageElement.textContent = `Click ${
        this.targetScore - this.score
      } more times to reach the next level.`;
    }
  }
}

export default LevelProgress;
