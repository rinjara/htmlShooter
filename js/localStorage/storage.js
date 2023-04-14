const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (error) {
    console.error('Set state error: ', error.message);
  }
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (error) {
    console.error('Get state error: ', error.message);
  }
};

export default {
  save,
  load,
};

let initialStats = {
  level: 1,
  maxLevel: 5,
  score: 0,
  maxScore: 75, // 35 if HP+1, 75 if HP+5
  enemyHPlevel: 5,
  enemyCurrentHP: 5,
};
