const boost = [1, 2, 3, 4, 5, 6];
const setback = [1, 2, 3, 4, 5, 6];
const ability = [1, 2, 3, 4, 5, 6, 7, 8];
const difficulty = [1, 2, 3, 4, 5, 6, 7, 8];
const proficiency = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const challenge = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

// console.log(boost[Math.floor(Math.random() * boost.length)]);

let success = 0;
let advantage = 0;
let triumph = 0;
let despair = 0;

function boostDice() {
  let i = boost[Math.floor(Math.random() * boost.length)];
  console.log(i);
  switch (i) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      success++;
      break;
    case 4:
      success++;
      advantage++;
      break;
    case 5:
      advantage++;
      advantage++;
      break;
    case 6:
      advantage++;
      break;
  }
  console.log(success, advantage);
  return success, advantage;
}

function setbackDice() {
  let i = setback[Math.floor(Math.random() * setback.length)];
  console.log(i);
  switch (setback[i]) {
    case 1:
      break;
    case 2:
      break;
    case 3:
      success--;
      break;
    case 4:
      success--;
      break;
    case 5:
      advantage--;
      break;
    case 6:
      advantage--;
      break;
  }
  console.log(success, advantage);
  return success, advantage;
}

function abilityDice() {
  let i = ability[Math.floor(Math.random() * ability.length)];
  console.log(i);
  switch (ability[i]) {
    case 1:
      break;
    case 2:
      success++;
      break;
    case 3:
      success++;
      break;
    case 4:
      success++;
      success++;
      break;
    case 5:
      advantage++;
      break;
    case 6:
      advantage++;
      break;
    case 7:
      success++;
      advantage++;
      break;
    case 8:
      advantage++;
      advantage++;
      break;
  }
  console.log(success, advantage);
  return success, advantage;
}

function difficultyDice() {
  let i = difficulty[Math.floor(Math.random() * difficulty.length)];
  console.log(i);
  switch (difficulty[i]) {
    case 1:
      break;
    case 2:
      success--;
      break;
    case 3:
      success--;
      success--;
      break;
    case 4:
      advantage--;
      break;
    case 5:
      advantage--;
      break;
    case 6:
      advantage--;
      break;
    case 7:
      advantage--;
      advantage--;
      break;
    case 8:
      success--;
      advantage--;
      break;
  }
  console.log(success, advantage);
  return success, advantage;
}

function proficiencyDice() {
  let i = proficiency[Math.floor(Math.random() * proficiency.length)];
  console.log(i);
  switch (proficiency[i]) {
    case 1:
      break;
    case 2:
      success++;
      break;
    case 3:
      success++;
      break;
    case 4:
      success++;
      success++;
      break;
    case 5:
      success++;
      success++;
      break;
    case 6:
      advantage++;
      break;
    case 7:
      success++;
      advantage++;
      break;
    case 8:
      success++;
      advantage++;
      break;
    case 9:
      success++;
      advantage++;
      break;
    case 10:
      advantage++;
      advantage++;
      break;
    case 11:
      advantage++;
      advantage++;
      break;
    case 12:
      triumph++;
      success++;
      break;
  }
  console.log(success, advantage, triumph);
  return success, advantage, triumph;
}

function challengeDice() {
  let i = challenge[Math.floor(Math.random() * challenge.length)];
  console.log(i);
  switch (proficiency[i]) {
    case 1:
      break;
    case 2:
      success--;
      break;
    case 3:
      success--;
      break;
    case 4:
      success--;
      success--;
      break;
    case 5:
      success--;
      success--;
      break;
    case 6:
      advantage--;
      break;
    case 7:
      advantage--;
      break;
    case 8:
      success--;
      advantage--;
      break;
    case 9:
      success--;
      advantage--;
      break;
    case 10:
      advantage--;
      advantage--;
      break;
    case 11:
      advantage--;
      advantage--;
      break;
    case 12:
      despair++;
      success--;
      break;
  }
  console.log(success, advantage, triumph);
  return success, advantage, despair;
}
