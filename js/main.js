'use strict';
var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
var itemUnique = function (array, item) {
  for (var i = 0; i < array.length; i++) {
    if (array(i) === item) {
      return false;
    }
  }
  return true;
};
var getRandomFromArr = function (array, count) {
  var result = [];
  for (var i = 0; i < count || i < array.length; i++) {
    var randomItem = array[getRandomNumber(0, array.length - 1)];
    if (itemUnique(result, randomItem)) {
      result.push(randomItem);
    }
  }
  return result;
};
var generateAd = function () {
  var block = [];
  var BLOCK_NUMBER = 8;
  var OFFER_TYPES = ['palace', 'flat', 'house', 'bungalo'];
  var CHECK_TIMES = ['12:00', '13:00', '14:00'];
  var OFFER_FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
  var OFFER_PHOTOS = [
    'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
    'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
  ];
  for (var i = 0; i < BLOCK_NUMBER; i++) {
    var mapWidth;
    var PIN_WIDTH;
    var locationX = Math.floor(Math.random() * (mapWidth - PIN_WIDTH));
    var locationY = 130 + Math.floor(Math.random() * 500);
    var featuresNumber = 1 + Math.floor(Math.random() * (OFFER_FEATURES.length - 1));
    var photosNumber = 1 + Math.floor(Math.random() * (OFFER_PHOTOS.length - 1));
    var item = {
      'author': {
        'avatar': 'img/avatars/user0' + (i + 1) + '.png'
      },
      'offer': {
        'title': 'title-' + i,
        'address': '{{location.x-' + i + '}}, {{location.y-' + i + '}}',
        'price': '{{price1-' + i + '}}, {{price2-' + i + '}}',
        'type': getRandomFromArr(OFFER_TYPES, -1),
        'rooms': '{{rooms-' + i + '}}',
        'guests': '{{guests-' + i + '}}',
        'checkin': getRandomFromArr(CHECK_TIMES, -1),
        'checkout': getRandomFromArr(CHECK_TIMES, -1),
        'features': getRandomFromArr(OFFER_FEATURES, featuresNumber),
        'description': '{{descr-' + i + '}}',
        'photos': getRandomFromArr(OFFER_PHOTOS, photosNumber)
      },
      'location': {
        'x': locationX,
        'y': locationY
      }
    };
    block.push(item);
  }
  return block;
};
var block = generateAd();

