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
        avatar: getRandomItemFromArray(),
      },
      offer: {
        title: getRandomItemFromArray(),
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
    })
    return dateArray;
  }
};
var dates = createRandomDate();
var similarListElement = document.querySelector('.map__pin');
var similarDateTemplate = document.querySelector('#pin');
var render = function (date) {
  var dateElement = similarDateTemplate.cloneNode(true);
  dateElement.querySelector('.').textContent = date.location;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < dates.length; i++) {
  fragment.appendChild(render(dates[i]));
}
similarListElement.appendChild(fragment);

