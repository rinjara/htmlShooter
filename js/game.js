const ENEMIES = [
  'alien.png',
  'bear.png',
  'bee.png',
  'boar.png',
  'panda.png',
  'rhinoceros.png',
];

const LANDSCAPES = [
  'beginning.jpg',
  'firstScene.jpg',
  'secondScene.jpg',
  'thirdScene.jpg',
  'fourthScene.jpg',
  'sunset.jpg',
];

const initialStats = {
  level: 1,
  maxLevel: 5,
  score: 0,
  maxScore: 75,
  enemyHPlevel: 5,
  enemyCurrentHP: 5,
};

function showNotification(title, message) {
  const notificationRef = document.getElementById('notification');
  const titleRef = document.querySelector('.notification-title');
  const messageRef = document.querySelector('.notification-message');

  titleRef.textContent = title;
  messageRef.textContent = message;

  notificationRef.classList.add('show');
  setTimeout(() => {
    notificationRef.classList.remove('show');
  }, 1500);
}

function updateEnemyPlace() {
  const enemyRef = document.querySelector('.enemy-wrapper');

  setInterval(() => {
    const buttonRect = enemyRef.getBoundingClientRect();
    const newTop = Math.floor(
      Math.random() * (window.innerHeight - buttonRect.height)
    );
    const newLeft = Math.floor(
      Math.random() * (window.innerWidth - buttonRect.width)
    );

    enemyRef.style.top = `${newTop}px`;
    enemyRef.style.left = `${newLeft}px`;
  }, 2000);
}

function updateEnemyImage(enemy) {
  document.querySelector('.enemy-img').src = `./images/enemies/${enemy}`;
}

function updateBackgroundOfTheScene(landscape) {
  const bodyRef = document.querySelector('body');
  bodyRef.style.background = `url("./images/background/${landscape}") no-repeat`;
  bodyRef.style.backgroundSize = 'cover';
}

document.addEventListener('DOMContentLoaded', () => {
  const gameSection = document.getElementById('game');
  const congratsSection = document.getElementById('congrats');

  const enemyRef = document.getElementById('enemy');
  const userNicknameRef = document.getElementById('nick');
  const levelRef = document.getElementById('level');
  const userScoreRef = document.getElementById('score');
  const enemyHPRef = document.getElementById('enemy-health');
  const enemyHealthProgressRef = document.getElementById('enemyHealthProgress');
  const congratsNicknameRef = document.querySelector('.congrats-nick');
  const finalScoreRef = document.querySelector('.final-score');
  let userData;

  updateEnemyPlace();

  try {
    userData = JSON.parse(localStorage.getItem('player'));
  } catch (error) {
    console.error('Get state error: ', error.message);
  }

  userNicknameRef.textContent = userData.nickname;
  congratsNicknameRef.textContent = userData.nickname;

  enemyHealthProgressRef.style.width = `${
    (initialStats.enemyCurrentHP / initialStats.enemyHPlevel) * 100
  }%`;

  enemyRef.addEventListener('click', () => {
    initialStats.score += 1;
    userScoreRef.textContent = `Your score: ${initialStats.score}`;

    initialStats.enemyCurrentHP -= 1;
    enemyHPRef.textContent = `Enemy HP: ${initialStats.enemyCurrentHP}`;

    const enemyHealthPercentage =
      (initialStats.enemyCurrentHP / initialStats.enemyHPlevel) * 100;
    enemyHealthProgressRef.style.width = `${enemyHealthPercentage}%`;

    if (initialStats.enemyCurrentHP === 0) {
      if (initialStats.score === initialStats.maxScore) {
        gameSection.classList.add('visually-hidden');
        congratsSection.classList.remove('visually-hidden');
        finalScoreRef.textContent = initialStats.score;
      } else {
        initialStats.level += 1;
        levelRef.textContent = `Level: ${initialStats.level}`;

        initialStats.enemyHPlevel += 5;
        initialStats.enemyCurrentHP = initialStats.enemyHPlevel;
        enemyHPRef.textContent = `Enemy HP: ${initialStats.enemyCurrentHP}`;

        enemyHealthProgressRef.style.width = `100%`;

        const image = ENEMIES[Math.floor(Math.random() * ENEMIES.length)];
        updateEnemyImage(image);

        const landscape = LANDSCAPES[initialStats.level];
        updateBackgroundOfTheScene(landscape);

        showNotification(
          'Wow!',
          `You're moving to level ${initialStats.level}!`
        );
      }
    }
  });
});
