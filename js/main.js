'use strict';
var activeMap = document.querySelector('.map');
activeMap.classList.remove('.map--faded');
DATES_LENGTH = 8;
var random = function (min, max) {
  return Math.round(min - 0.5 + Math.random() * (max - min + 1));
};
var getRandomItemFromArray = function (arr) {
  return arr[random(0, arr.length - 1)];
};
var createRandomDate = function () {
  var dateArray = [];
  for (var i = 0; i <= DATES_LENGTH; i++) {
    dateArray.push({
      author: {
        avatar: getRandomItemFromArray(img / avatars / user0),
      },
      offer: {
        title:,
        address: getRandomItemFromArray(),
        price: getRandomItemFromArray(),
        type: getRandomItemFromArray(),
        rooms: getRandomItemFromArray(),
        guests: getRandomItemFromArray(),
        checkin: getRandomItemFromArray(),
        checkout: getRandomItemFromArray(),
        features: getRandomItemFromArray(),
        description: getRandomItemFromArray(),
        photos: getRandomItemFromArray(),
      },
      location: {
        x: getRandomItemFromArray(),
        y: getRandomItemFromArray(),
      }
    }),
    return dateArray;
  };
