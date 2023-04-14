document.addEventListener('DOMContentLoaded', () => {
  const registrationForm = document.querySelector('.register-form');
  const registrationSection = document.querySelector('.registration');
  const gameSection = document.querySelector('.game');

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

    alert(`Registration successful! Welcome, ${nickname}.`);
    registrationSection.classList.add('visually-hidden');
    gameSection.classList.remove('visually-hidden');
  });
});
