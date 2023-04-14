function showNotification(title, message) {
  const notificationRef = document.getElementById('notification');
  const titleRef = document.querySelector('.notification-title');
  const messageRef = document.querySelector('.notification-message');

  titleRef.textContent = title;
  messageRef.textContent = message;

  notificationRef.classList.add('show');
  setTimeout(() => {
    notificationRef.classList.remove('show');
  }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
  const registrationSection = document.getElementById('registration');
  const gameSection = document.getElementById('game');
  const registrationForm = document.querySelector('.register-form');

  registrationForm.addEventListener('submit', event => {
    event.preventDefault();
    const nickname = event.target.nickname.value.trim();
    const name = event.target.name.value.trim();
    const userEmail = event.target.email.value.trim();

    const playerData = {
      nickname: nickname,
      name: name,
      email: userEmail,
      score: 0,
    };

    try {
      const serializedData = JSON.stringify(playerData);
      localStorage.setItem('player', serializedData);
    } catch (error) {
      console.error('Set state error: ', error.message);
    }
    registrationSection.classList.add('visually-hidden');
    gameSection.classList.remove('visually-hidden');

    showNotification(
      `Registration successful! Welcome, ${nickname}.`,
      `It's time to start your journey! Please, defeat this awfull enemies and save our planet from destroy!`
    );
  });
});
