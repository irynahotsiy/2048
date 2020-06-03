// generate random number
function getRandomNumber(size) {
  const random = Math.floor(Math.random() * Math.floor(size));
  return random;
}

// get two random numbers to generate coords of random item
function getCoordsToGenerateRandom(size) {
  let array = [];
  for (let i = 0; i < 2; i++) {
    array.push(getRandomNumber(size));
  }
  return array;
}

// get random from array
function getRandomIdxFromArray(array) {
  const randomIdx = array[Math.floor(Math.random() * array.length)];
  return randomIdx;
}

// get one random from 2 or 4
function generateTwoOrFour() {
  const random = Math.floor(Math.random() * Math.floor(100));
  if (random < 15) {
    return 4;
  } else {
    return 2;
  }
}

// generate empty arr from current size
export function generateArray(size) {
  let array = [];
  for (let i = 0; i < size; i++) {
    array[i] = [];
    for (let j = 0; j < size; j++) {
      array[i].push(0);
    }
    array.push[array[i]];
  }
  return array;
}

// change item in array to start a game
function putRandomItem(array) {
  const random = getCoordsToGenerateRandom(array.length);
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (i === random[0] && j === random[1]) {
        array[i][j] = generateTwoOrFour();
      }
    }
  }
}

// generate array to start a game with two randoms
export function generateArrayWithTwoRandoms(size) {
  const array = generateArray(size);
  putRandomItem(array);
  putRandomItem(array);
  return array;
}

// get all empty spaces to generate one random
export function getEmptySpaces(array) {
  let emptySpacesIdx = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      let combination = [];
      if (array[i][j] === 0) {
        combination.push(i, j);
        emptySpacesIdx.push(combination);
      }
    }
  }
  return emptySpacesIdx;
}

// get array with one more random when swiped
function generateOneRandomInEmptyArray(array) {
  let emptySpaces = getEmptySpaces(array);
  let random = getRandomIdxFromArray(emptySpaces);
  array[random[0]][random[1]] = generateTwoOrFour();
  return array.slice();
}

// generate random when there are some operation done and empty array length do not equal zero
function checkIfRenderRandom(setRandom, array) {
  if (setRandom && getEmptySpaces(array).length !== 0) {
    generateOneRandomInEmptyArray(array);
  }
}

// sort all items not equal to null
export function sortArray(array) {
  if (array === undefined) {
    return undefined;
  } else {
    let sortedItems = [];
    for (let i = 0; i < array.length; i++) {
      if (array[i] !== 0) {
        sortedItems.push(array[i]);
      }
    }
    return sortedItems;
  }
}

// join array from start to end on left or up swipe
export function joinSortedLeftUp(array) {
  let score = 0;
  let sorted = sortArray(array);
  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      let num = sorted[i] + sorted[i + 1];
      score += num;
      sorted[i + 1] = sorted[i] + sorted[i + 1];
      sorted[i] = 0;
      i += 1;
    }
  }
  let joined = sortArray(sorted.slice());
  return { joined, score };
}

// join array from end to start on right or down swipe
export function joinSortedRightDown(array) {
  let score = 0;
  let sorted = sortArray(array);
  for (let i = sorted.length - 1; i >= 0; i--) {
    if (sorted[i] === sorted[i - 1]) {
      let num = sorted[i] + sorted[i - 1];
      score += num;
      sorted[i - 1] = sorted[i] + sorted[i - 1];
      sorted[i] = 0;
      i -= 1;
    }
  }
  let joined = sortArray(sorted.slice());
  return { joined, score };
}

// get full array with joined items
export function getLeftUpArray(array) {
  let { joined, score } = joinSortedLeftUp(array);
  let fullArray = [];
  for (let i = 0; i < array.length; i++) {
    fullArray[i] = joined[i] ? joined[i] : 0;
  }
  return { fullArray, score };
}

// get full array with joined items
export function getRightDownArray(array) {
  let { joined, score } = joinSortedRightDown(array);
  let fullArray = [];
  for (let i = 0; i < array.length - joined.length; i++) {
    fullArray[i] = 0;
  }
  for (let i = 0; i < joined.length; i++) {
    fullArray[array.length - joined.length + i] = joined[i];
  }
  return { fullArray, score };
}

// check if something changed in the array
export function compareArrays(oldArray, newArray) {
  for (let i = 0; i < oldArray.length; i++) {
    if (oldArray[i] !== newArray[i]) {
      return true;
    }
  }
  return false;
}

export function onSwipeLeft(array) {
  let setRandom = false;
  let fullScore = 0;
  for (let i = 0; i < array.length; i++) {
    let leftArray = getLeftUpArray(array[i]).fullArray;
    fullScore += getLeftUpArray(array[i]).score;
    let compare = compareArrays(array[i], leftArray);
    if (compare === true) {
      setRandom = true;
    }
    for (let j = 0; j < array[i].length; j++) {
      array[i][j] = leftArray[j];
    }
  }
  checkIfRenderRandom(setRandom, array);
  return { array: array.slice(), fullScore };
}

export function onSwipeRight(array) {
  let setRandom = false;
  let fullScore = 0;
  for (let i = 0; i < array.length; i++) {
    let rightArray = getRightDownArray(array[i]).fullArray;
    fullScore += getRightDownArray(array[i]).score;
    let compare = compareArrays(array[i], rightArray);
    if (compare === true) {
      setRandom = true;
    }
    for (let j = 0; j < array.length; j++) {
      array[i][j] = rightArray[j];
    }
  }
  checkIfRenderRandom(setRandom, array);
  return { array: array.slice(), fullScore };
}

export function onSwipeUp(array) {
  let setRandom = false;
  let fullScore = 0;
  for (let j = 0; j < array.length; j++) {
    let getColumn = [];
    for (let i = 0; i < array.length; i++) {
      getColumn.push(array[i][j]);
    }
    let upArray = getLeftUpArray(getColumn).fullArray;
    fullScore += getLeftUpArray(getColumn).score;
    let compare = compareArrays(getColumn, upArray);
    if (compare === true) {
      setRandom = true;
    }
    for (let i = 0; i < array.length; i++) {
      array[i][j] = upArray[i];
    }
  }
  checkIfRenderRandom(setRandom, array);
  return { array: array.slice(), fullScore };
}

export function onSwipeDown(array) {
  let setRandom = false;
  let fullScore = 0;
  for (let j = 0; j < array.length; j++) {
    let getColumn = [];
    for (let i = 0; i < array.length; i++) {
      getColumn.push(array[i][j]);
    }
    let downArray = getRightDownArray(getColumn).fullArray;
    fullScore += getRightDownArray(getColumn).score;
    let compare = compareArrays(getColumn, downArray);
    if (compare === true) {
      setRandom = true;
    }
    for (let i = 0; i < array.length; i++) {
      array[i][j] = downArray[i];
    }
  }
  checkIfRenderRandom(setRandom, array);
  return { array: array.slice(), fullScore };
}

export function reverseNumberToEmptyString(item) {
  if (item === 0) {
    return "";
  } else {
    return item;
  }
}

export function checkIfGameOver(array) {
  let gameOver = true;
  if (getEmptySpaces(array).length !== 0) {
    gameOver = false;
  } else {
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length; j++) {
        if (j !== array.length - 1) {
          if (array[i][j] === array[i][j + 1]) {
            gameOver = false;
          }
        }
      }
    }
    for (let j = 0; j < array.length; j++) {
      for (let i = 0; i < array.length; i++) {
        if (i !== array.length - 1) {
          if (array[i][j] === array[i + 1][j]) {
            gameOver = false;
          }
        }
      }
    }
  }

  return gameOver;
}

export function getTheBiggestFromArray(array, theBiggest) {
  let number = theBiggest;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > number) {
        number = array[i][j];
      }
    }
  }
  return number;
}
