import {
  generateArray,
  getEmptySpaces,
  sortArray,
  joinSortedLeftUp,
  joinSortedRightDown,
  getLeftUpArray,
  getRightDownArray,
  compareArrays,
  onSwipeLeft,
  onSwipeRight,
  onSwipeUp,
  onSwipeDown,
  reverseNumberToEmptyString,
  checkIfGameOver,
  getTheBiggestFromArray,
} from "../services/services";

describe("generateArray", () => {
  test("should return array for size 3", () => {
    expect(generateArray(3)).toEqual([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
  });
  test("should return array for size 4", () => {
    expect(generateArray(4)).toEqual([
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ]);
  });
  test("should return array for size 5", () => {
    expect(generateArray(5)).toEqual([
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0],
    ]);
  });
  test("should return array for size 6", () => {
    expect(generateArray(6)).toEqual([
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ]);
  });
  test("should return array for size 8", () => {
    expect(generateArray(8)).toEqual([
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0],
    ]);
  });
});

describe("getEmptySpaces", () => {
  test("should return array with empty spaces combinations", () => {
    expect(
      getEmptySpaces([
        [8, 2, 0],
        [0, 2, 0],
        [2, 0, 2],
      ])
    ).toEqual([
      [0, 2],
      [1, 0],
      [1, 2],
      [2, 1],
    ]);
    expect(
      getEmptySpaces([
        [8, 2, 0, 0, 0],
        [0, 2, 0, 0, 2],
        [2, 0, 2, 8, 0],
        [0, 0, 0, 4, 8],
        [2, 4, 8, 0, 0],
      ])
    ).toEqual([
      [0, 2],
      [0, 3],
      [0, 4],
      [1, 0],
      [1, 2],
      [1, 3],
      [2, 1],
      [2, 4],
      [3, 0],
      [3, 1],
      [3, 2],
      [4, 3],
      [4, 4],
    ]);
  });
});

describe("sortArray", () => {
  test("should return all items not equal to zero", () => {
    expect(sortArray([0, 2, 8, 16, 0])).toEqual([2, 8, 16]);
    expect(sortArray([0, 2, 8, 16, 0, 0, 4, 2])).toEqual([2, 8, 16, 4, 2]);
  });
  test("should return empty array when all items are equal to zero", () => {
    expect(sortArray([0, 0, 0])).toEqual([]);
  });
  test("should return empty array when all items are equal to zero", () => {
    expect(sortArray()).toEqual(undefined);
  });
});

describe("joinSortedLeftUp", () => {
  test("should return object with score zero when any operations done", () => {
    expect(joinSortedLeftUp([0, 2, 8, 16, 0, 0, 4, 2])).toEqual({
      joined: [2, 8, 16, 4, 2],
      score: 0,
    });
  });
  test("should return object with valid score and joined array when some operations are done", () => {
    expect(joinSortedLeftUp([2, 2, 8, 8, 4, 4, 2, 2, 2])).toEqual({
      joined: [4, 16, 8, 4, 2],
      score: 32,
    });
  });
  test("should return object with valid score and joined array when some operations are done", () => {
    expect(joinSortedLeftUp([2, 2, 2, 8, 4, 4, 4, 4, 4])).toEqual({
      joined: [4, 2, 8, 8, 8, 4],
      score: 20,
    });
  });
});

describe("joinSortedRightDown", () => {
  test("should return object with score zero when any operations done", () => {
    expect(joinSortedRightDown([0, 2, 8, 16, 0, 0, 4, 2])).toEqual({
      joined: [2, 8, 16, 4, 2],
      score: 0,
    });
  });
  test("should return object with valid score and joined array when some operations are done", () => {
    expect(joinSortedRightDown([2, 2, 8, 8, 4, 4, 2, 2, 2, 0, 0])).toEqual({
      joined: [4, 16, 8, 2, 4],
      score: 32,
    });
  });
  test("should return object with valid score and joined array when some operations are done", () => {
    expect(joinSortedRightDown([2, 2, 2, 8, 4, 4, 4, 4, 4])).toEqual({
      joined: [2, 4, 8, 4, 8, 8],
      score: 20,
    });
  });
});

describe("getLeftUpArray", () => {
  test("should return object with full array joined left and score", () => {
    expect(getLeftUpArray([2, 2, 8, 8, 4, 4, 2, 2, 2, 0, 0])).toEqual({
      fullArray: [4, 16, 8, 4, 2, 0, 0, 0, 0, 0, 0],
      score: 32,
    });
  });
  test("should return object with full array joined left and score", () => {
    expect(getLeftUpArray([2, 2, 0, 0, 0, 4, 2, 2, 2, 0, 0])).toEqual({
      fullArray: [4, 4, 4, 2, 0, 0, 0, 0, 0, 0, 0],
      score: 8,
    });
  });
  test("should return object with full array joined left and score", () => {
    expect(getLeftUpArray([2, 2, 0])).toEqual({
      fullArray: [4, 0, 0],
      score: 4,
    });
  });
});

describe("getRightDownArray", () => {
  test("should return object with full array joined right and score", () => {
    expect(getRightDownArray([2, 2, 8, 8, 4, 4, 2, 2, 2, 0, 0])).toEqual({
      fullArray: [0, 0, 0, 0, 0, 0, 4, 16, 8, 2, 4],
      score: 32,
    });
  });
  test("should return object with full array joined right and score", () => {
    expect(getRightDownArray([2, 2, 0, 0, 0, 4, 2, 2, 2, 0, 0])).toEqual({
      fullArray: [0, 0, 0, 0, 0, 0, 0, 4, 4, 2, 4],
      score: 8,
    });
  });
  test("should return object with full array joined right and score", () => {
    expect(getRightDownArray([2, 2, 0])).toEqual({
      fullArray: [0, 0, 4],
      score: 4,
    });
  });
  test("should return object with full array joined right and score", () => {
    expect(getRightDownArray([2, 0, 0])).toEqual({
      fullArray: [0, 0, 2],
      score: 0,
    });
  });
});

describe("compareArrays", () => {
  test("should return true if the array has any changes", () => {
    expect(compareArrays([2, 2, 0], [0, 0, 2])).toBe(true);
  });
  test("should return false when no changes to the array are made", () => {
    expect(compareArrays([2, 2, 0], [0, 0, 2])).toBe(true);
  });
});

describe("onSwipeLeft", () => {
  test("should return the same array with no generated item if no changes have done", () => {
    expect(
      onSwipeLeft([
        [2, 0, 0, 0, 0, 0],
        [8, 0, 0, 0, 0, 0],
        [4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [4, 8, 0, 0, 0, 0],
        [4, 2, 0, 0, 0, 0],
      ])
    ).toEqual({
      array: [
        [2, 0, 0, 0, 0, 0],
        [8, 0, 0, 0, 0, 0],
        [4, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0],
        [4, 8, 0, 0, 0, 0],
        [4, 2, 0, 0, 0, 0],
      ],
      fullScore: 0,
    });
  });
});
describe("onSwipeRight", () => {
  test("should return the same array with no generated item if no changes have done", () => {
    expect(
      onSwipeRight([
        [0, 0, 8],
        [0, 2, 4],
        [2, 4, 8],
      ])
    ).toEqual({
      array: [
        [0, 0, 8],
        [0, 2, 4],
        [2, 4, 8],
      ],
      fullScore: 0,
    });
  });
});

describe("onSwipeUp", () => {
  test("should return the same array with no generated item if no changes have done", () => {
    expect(
      onSwipeUp([
        [2, 2, 8],
        [4, 4, 2],
        [0, 2, 0],
      ])
    ).toEqual({
      array: [
        [2, 2, 8],
        [4, 4, 2],
        [0, 2, 0],
      ],
      fullScore: 0,
    });
  });
});

describe("onSwipeDown", () => {
  test("should return the same array with no generated item if no changes have done", () => {
    expect(
      onSwipeDown([
        [0, 0, 0],
        [8, 4, 2],
        [2, 2, 4],
      ])
    ).toEqual({
      array: [
        [0, 0, 0],
        [8, 4, 2],
        [2, 2, 4],
      ],
      fullScore: 0,
    });
  });
});

describe("reverseNumberToEmptyString", () => {
  test("should return empty string when item is equal to zero", () => {
    expect(reverseNumberToEmptyString(0)).toEqual("");
  });
  test("should return the same number when item is not equal to zero", () => {
    expect(reverseNumberToEmptyString(2)).toEqual(2);
  });
});

describe("checkIfGameOver", () => {
  test("return false when is empty spaces in the array", () => {
    expect(
      checkIfGameOver([
        [2, 2, 8],
        [4, 4, 2],
        [0, 2, 0],
      ])
    ).toEqual(false);
  });
  test("return true when is no empty spaces in the array and any combinations done", () => {
    expect(
      checkIfGameOver([
        [2, 8, 4],
        [4, 2, 16],
        [2, 4, 8],
      ])
    ).toEqual(true);
  });
  test("return false when is no empty spaces but some combinations are possible", () => {
    expect(
      checkIfGameOver([
        [2, 8, 4],
        [2, 2, 16],
        [2, 4, 8],
      ])
    ).toEqual(false);
  });
});

describe("getTheBiggestFromArray", () => {
  test("should return the biggest number from array", () => {
    expect(
      getTheBiggestFromArray(
        [
          [2, 8, 4],
          [2, 2, 2048],
          [2, 8, 8],
        ],
        1024
      )
    ).toEqual(2048);
  });
  test("should return the biggest number from array", () => {
    expect(
      getTheBiggestFromArray(
        [
          [2, 8, 4],
          [2, 2, 128],
          [2, 4, 512],
        ],
        256
      )
    ).toEqual(512);
  });
  test("should return the biggest number from array", () => {
    expect(
      getTheBiggestFromArray(
        [
          [256, 8, 4],
          [2, 2, 128],
          [2, 4, 256],
        ],
        256
      )
    ).toEqual(256);
  });
});
