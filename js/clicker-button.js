class ClickerButton {
  constructor() {
    this.buttonElement = document.getElementById('clicker-button');
    this.scoreElement = document.getElementById('score');

    this.score = 0;

    this.buttonElement.addEventListener('click', this.onClick.bind(this));

    this.updateScore();
  }

  onClick() {
    this.score++;
    this.updateScore();
  }

  updateScore() {
    this.scoreElement.textContent = `Score: ${this.score}`;
  }
}

export default ClickerButton;
