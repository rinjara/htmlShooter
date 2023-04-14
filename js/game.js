const ENEMIES = [
  'alien.png',
  'bear.png',
  'bee.png',
  'boar.png',
  'panda.png',
  'rhinoceros.png',
];

const LANDSCAPES = [
  'beginning.png',
  'firstScene.png',
  'secondScene.png',
  'thirdScene.png',
  'fourthScene.png',
  'sunset.png',
];

const initialStats = {
  level: 1,
  maxLevel: 5,
  score: 0,
  maxScore: 75, // 35 if HP+1, 75 if HP+5
  enemyHPlevel: 5,
  enemyCurrentHP: 5,
};

function updateEnemyImage(enemy) {
  document.querySelector('.enemy-img').src = `./images/enemies/${enemy}`;
}

function updateBackgroundOfTheScene(landscape) {
  document.querySelector(
    'body'
  ).style.background = `url("./images/background/${landscape}") no-repeat center cover`;
}

document.addEventListener('DOMContentLoaded', () => {
  const pageRef = document.querySelector('body');
  const enemyRef = document.getElementById('enemy');
  const userNicknameRef = document.getElementById('nick');
  const levelRef = document.getElementById('level');
  const userScoreRef = document.getElementById('score');
  const enemyHPRef = document.getElementById('enemy-health');
  const enemyHealthProgressRef = document.getElementById('enemyHealthProgress');
  let userData;

  try {
    userData = JSON.parse(localStorage.getItem('player'));
  } catch (error) {
    console.error('Get state error: ', error.message);
  }

  userNicknameRef.textContent = userData.nickname;

  enemyHealthProgressRef.style.width = `${
    (initialStats.enemyCurrentHP / initialStats.enemyHPlevel) * 100
  }%`;

  enemyRef.addEventListener('click', () => {
    initialStats.score += 1;
    userScoreRef.textContent = `Your score: ${initialStats.score}`;

    initialStats.enemyCurrentHP -= 1;
    enemyHPRef.textContent = `HP: ${initialStats.enemyCurrentHP}`;

    const enemyHealthPercentage =
      (initialStats.enemyCurrentHP / initialStats.enemyHPlevel) * 100;
    enemyHealthProgressRef.style.width = `${enemyHealthPercentage}%`;

    if (initialStats.enemyCurrentHP === 0) {
      initialStats.level += 1;
      levelRef.textContent = `Level: ${initialStats.level}`;

      initialStats.enemyHPlevel += 5;
      initialStats.enemyCurrentHP = initialStats.enemyHPlevel;
      enemyHPRef.textContent = `HP: ${initialStats.enemyCurrentHP}`;

      enemyHealthProgressRef.style.width = `100%`;

      const image = ENEMIES[Math.floor(Math.random() * ENEMIES.length)];
      updateEnemyImage(image);

      const landscape = LANDSCAPES[level];
      // pageRef.style.backgroundImage;
      updateBackgroundOfTheScene(landscape);
    }
  });

  //   upgradeButton.addEventListener('click', () => {
  //     if (money >= cost) {
  //       money -= cost;
  //       playerScore.textContent = money;
  //       damage += 1;

  //       currentDamage.textContent = damage;
  //       cost = Math.ceil(cost * 1.1);
  //       localStorage.setItem('money', money);
  //       upgradeCost.textContent = cost;
  //     } else {
  //       alert('You do not have enough points to upgrade your weapon.');
  //     }
  //   });
});
