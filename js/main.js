import RegistrationForm from './registration-form.js';
import ClickerButton from './clicker-button.js';
import LevelProgress from './level-progress.js';

const registrationForm = new RegistrationForm();
const clickerButton = new ClickerButton();
const levelProgress = new LevelProgress(10);

clickerButton.buttonElement.addEventListener('click', () => {
  clickerButton.onClick();
  levelProgress.incrementScore();
});
