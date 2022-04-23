// Code your solution in this file!

const returnFirstTwoDrivers = (arr) => {
  return arr.slice(0, 2);
};
const returnLastTwoDrivers = (arr) => {
  return arr.slice(-2);
};

//createFareMultiplier() — This is a higher-order
//function that takes in one argument, an integer,
//and returns a function that will multiply a fare
//for a ride accordingly. If createFareMultiplier() receives
//an argument of 4, it will return a function that takes in
//a fare as an argument and quadruples the fare.

const createFareMultiplier = (arg) => {
  return function (fare) {
    return fare * arg;
  };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const selectDifferentDrivers = (arr, callback) => {
  if (callback == returnFirstTwoDrivers) return selectingDrivers[0](arr);
  else if (callback == returnLastTwoDrivers) return selectingDrivers[1](arr);
};
