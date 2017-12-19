// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  return Math.abs(42 - num);
}

function distanceFromHqInFeet(num) {
  return distanceFromHqInBlocks(num) * 264;
}

function distanceTravelledInFeet(from, to) {
  return Math.abs(from - to) * 264;
}
