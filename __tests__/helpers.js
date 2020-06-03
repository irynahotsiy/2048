import {
  getBack,
  getForward,
  getBackSize,
  getForwardSize,
  getBoxSize,
  getFontSize,
  getBackgroundNumberBox,
  getNumberColor,
} from "../helpers/helpers";
import { BOXSIZE } from "../constants/boxsize";

describe("getBack", () => {
  test("should return item before", () => {
    expect(
      getBack(
        [
          "Small - 3 X 3",
          "Clasic - 4 X 4",
          "Big - 5 X 5",
          "Bigger - 6 X 6",
          "Huge - 8 X 8",
        ],
        "Big - 5 X 5"
      )
    ).toEqual("Clasic - 4 X 4");
  });
  test("should return undefined when item is not in the array", () => {
    expect(
      getBack(
        [
          "Small - 3 X 3",
          "Clasic - 4 X 4",
          "Big - 5 X 5",
          "Bigger - 6 X 6",
          "Huge - 8 X 8",
        ],
        "Small - 3 X 3"
      )
    ).toEqual(undefined);
  });
});

describe("getBack", () => {
  test("should return item forward", () => {
    expect(
      getForward(
        [
          "Small - 3 X 3",
          "Clasic - 4 X 4",
          "Big - 5 X 5",
          "Bigger - 6 X 6",
          "Huge - 8 X 8",
        ],
        "Small - 3 X 3"
      )
    ).toEqual("Clasic - 4 X 4");
  });
  test("should return undefined", () => {
    expect(
      getForward(
        [
          "Small - 3 X 3",
          "Clasic - 4 X 4",
          "Big - 5 X 5",
          "Bigger - 6 X 6",
          "Huge - 8 X 8",
        ],
        "Huge - 8 X 8"
      )
    ).toEqual(undefined);
  });
});

describe("getBackSize", () => {
  test("should return six", () => {
    expect(
      getBackSize(
        [
          "Small - 3 X 3",
          "Clasic - 4 X 4",
          "Big - 5 X 5",
          "Bigger - 6 X 6",
          "Huge - 8 X 8",
        ],
        8,
        "Huge - 8 X 8"
      )
    ).toEqual(6);
  });
  test("should return size one step before", () => {
    expect(
      getBackSize(
        [
          "Small - 3 X 3",
          "Clasic - 4 X 4",
          "Big - 5 X 5",
          "Bigger - 6 X 6",
          "Huge - 8 X 8",
        ],
        5,
        "Big - 5 X 5"
      )
    ).toEqual(4);
  });
});
describe("getForwardSize", () => {
  test("should return eight", () => {
    expect(
      getForwardSize(
        [
          "Small - 3 X 3",
          "Clasic - 4 X 4",
          "Big - 5 X 5",
          "Bigger - 6 X 6",
          "Huge - 8 X 8",
        ],
        6,
        "Bigger - 6 X 6"
      )
    ).toEqual(8);
  });
  test("should return size forward", () => {
    expect(
      getForwardSize(
        [
          "Small - 3 X 3",
          "Clasic - 4 X 4",
          "Big - 5 X 5",
          "Bigger - 6 X 6",
          "Huge - 8 X 8",
        ],
        5,
        "Big - 5 X 5"
      )
    ).toEqual(6);
  });
});

describe("getBoxSize", () => {
  test("should return valid parameters for size 8", () => {
    expect(getBoxSize(8, "big")).toEqual(42);
    expect(getBoxSize(8, "small")).toEqual(25);
  });
  test("should return valid parameters for size 6", () => {
    expect(getBoxSize(6, "big")).toEqual(55);
    expect(getBoxSize(6, "small")).toEqual(35);
  });
  test("should return valid parameters for size 5", () => {
    expect(getBoxSize(5, "big")).toEqual(65);
    expect(getBoxSize(5, "small")).toEqual(43);
  });
  test("should return valid parameters for size 4", () => {
    expect(getBoxSize(4, "big")).toEqual(80);
    expect(getBoxSize(4, "small")).toEqual(55);
  });
  test("should return valid parameters for size 3", () => {
    expect(getBoxSize(3, "big")).toEqual(110);
    expect(getBoxSize(3, "small")).toEqual(75);
  });
  test("should return default parameters when size is undefined", () => {
    expect(getBoxSize(undefined, "big")).toEqual(42);
    expect(getBoxSize(undefined, "small")).toEqual(25);
  });
});

describe("getFontSize", () => {
  test("should return valid fontSize for size 8", () => {
    expect(getFontSize(8, "big")).toEqual(15);
    expect(getFontSize(8, "small")).toEqual(15);
  });
  test("should return valid fontSize for size 6", () => {
    expect(getFontSize(6, "big")).toEqual(20);
    expect(getFontSize(6, "small")).toEqual(15);
  });
  test("should return valid fontSize for size 5", () => {
    expect(getFontSize(5, "big")).toEqual(20);
    expect(getFontSize(5, "small")).toEqual(20);
  });
  test("should return valid fontSize for size 4", () => {
    expect(getFontSize(4, "big")).toEqual(30);
    expect(getFontSize(4, "small")).toEqual(30);
  });
  test("should return valid fontSize for size 3", () => {
    expect(getFontSize(3, "big")).toEqual(30);
    expect(getFontSize(3, "small")).toEqual(30);
  });
  test("should return default fontSize when size is undefined", () => {
    expect(getFontSize(undefined, "big")).toEqual(15);
    expect(getFontSize(undefined, "small")).toEqual(15);
  });
});

describe("getBackgroundNumberBox", () => {
  test("should return background for number 0", () => {
    expect(getBackgroundNumberBox(0)).toEqual("#b9b6b6");
  });
  test("should return background for number 2", () => {
    expect(getBackgroundNumberBox(2)).toEqual("#f7efe5");
  });
  test("should return background for number 4", () => {
    expect(getBackgroundNumberBox(4)).toEqual("#f5d9b5");
  });
  test("should return background for number 8", () => {
    expect(getBackgroundNumberBox(8)).toEqual("#ecb071");
  });
  test("should return background for number 16", () => {
    expect(getBackgroundNumberBox(16)).toEqual("#f18310");
  });
  test("should return background for number 32", () => {
    expect(getBackgroundNumberBox(32)).toEqual("#f36d4e");
  });
  test("should return background for number 64", () => {
    expect(getBackgroundNumberBox(64)).toEqual("#f73e13");
  });
  test("should return background for number 128", () => {
    expect(getBackgroundNumberBox(128)).toEqual("#f3d878");
  });
  test("should return background for number 256", () => {
    expect(getBackgroundNumberBox(256)).toEqual("#f7c30c");
  });
  test("should return background for number 512", () => {
    expect(getBackgroundNumberBox(512)).toEqual("#bcd205");
  });
  test("should return background for number 1024", () => {
    expect(getBackgroundNumberBox(1024)).toEqual("#6ad806");
  });
  test("should return background for number 2048", () => {
    expect(getBackgroundNumberBox(2048)).toEqual("#4a9209");
  });
  test("should return background for number 4096", () => {
    expect(getBackgroundNumberBox(4096)).toEqual("#334424");
  });
  test("should return background for number 8192", () => {
    expect(getBackgroundNumberBox(8192)).toEqual("#171915");
  });
  test("should return default background when number is undefined or color is not set for this number", () => {
    expect(getBackgroundNumberBox(undefined)).toEqual("#b9b6b6");
    expect(getBackgroundNumberBox(16000)).toEqual("#b9b6b6");
    expect(getBackgroundNumberBox(7)).toEqual("#b9b6b6");
  });
});

const lightColor = "#fff";
const darkColor = "#654747";
describe("getNumberColor", () => {
  test("should return dark color for 0, 2, 4", () => {
    expect(getNumberColor(0)).toEqual(darkColor);
    expect(getNumberColor(2)).toEqual(darkColor);
    expect(getNumberColor(4)).toEqual(darkColor);
  });
  test("should return light color for other numbers", () => {
    expect(getNumberColor(8)).toEqual(lightColor);
    expect(getNumberColor(16)).toEqual(lightColor);
    expect(getNumberColor(32)).toEqual(lightColor);
    expect(getNumberColor(64)).toEqual(lightColor);
    expect(getNumberColor(128)).toEqual(lightColor);
    expect(getNumberColor(256)).toEqual(lightColor);
    expect(getNumberColor(512)).toEqual(lightColor);
    expect(getNumberColor(1024)).toEqual(lightColor);
    expect(getNumberColor(2048)).toEqual(lightColor);
    expect(getNumberColor(4096)).toEqual(lightColor);
    expect(getNumberColor(8192)).toEqual(lightColor);
  });
});
