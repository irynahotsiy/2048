import { SIZE_TITLES } from "../constants/titles";
import { BOXSIZE } from "../constants/boxsize";
import { BOXBACKGROUND } from "../constants/boxbackgrounds";
import { NUMBERCOLORS } from "../constants/numbercolors";

export function getBack(array, title) {
  return array[array.indexOf(title) - 1];
}

export function getForward(array, title) {
  return array[array.indexOf(title) + 1];
}

export function getBackSize(array, size, title) {
  if (array.indexOf(title) === 4) {
    return size - 2;
  }
  return size - 1;
}

export function getForwardSize(array, size, title) {
  if (array.indexOf(title) === 3) {
    return size + 2;
  }
  return size + 1;
}

export function getBoxSize(size, variant) {
  switch (size) {
    case 3:
      return BOXSIZE.EXTRALARGE[variant].width;
    case 4:
      return BOXSIZE.LARGE[variant].width;
    case 5:
      return BOXSIZE.MEDIUM[variant].width;
    case 6:
      return BOXSIZE.BIGGER[variant].width;
    case 8:
      return BOXSIZE.SMALL[variant].width;
    default:
      return BOXSIZE.SMALL[variant].width;
  }
}

export function getFontSize(size, variant) {
  switch (size) {
    case 3:
      return BOXSIZE.EXTRALARGE[variant].font;
    case 4:
      return BOXSIZE.LARGE[variant].font;
    case 5:
      return BOXSIZE.MEDIUM[variant].font;
    case 6:
      return BOXSIZE.BIGGER[variant].font;
    case 8:
      return BOXSIZE.SMALL[variant].font;
    default:
      return BOXSIZE.SMALL[variant].font;
  }
}

export function getBackgroundNumberBox(num) {
  switch (num) {
    case 0:
      return BOXBACKGROUND.ZERO;
    case 2:
      return BOXBACKGROUND.TWO;
    case 4:
      return BOXBACKGROUND.FOUR;
    case 8:
      return BOXBACKGROUND.EIGHT;
    case 16:
      return BOXBACKGROUND.SIXTEEN;
    case 32:
      return BOXBACKGROUND.THIRTYTWO;
    case 64:
      return BOXBACKGROUND.SIXTYFOUR;
    case 128:
      return BOXBACKGROUND.HUNDRED;
    case 256:
      return BOXBACKGROUND.TWOHUNDRED;
    case 512:
      return BOXBACKGROUND.FIVEHUNDRED;
    case 1024:
      return BOXBACKGROUND.THOUSAND;
    case 2048:
      return BOXBACKGROUND.TWOTHOUSAND;
    case 4096:
      return BOXBACKGROUND.FOURTHOUSAND;
    case 8192:
      return BOXBACKGROUND.EIGHTTHOUSAND;
    default:
      return BOXBACKGROUND.ZERO;
  }
}

export function getNumberColor(num) {
  switch (num) {
    case 0:
    case 2:
    case 4:
      return NUMBERCOLORS.DARKCOLOR;
    default:
      return NUMBERCOLORS.LIGHTCOLOR;
  }
}
