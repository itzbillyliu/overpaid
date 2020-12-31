export { allowedBrands, allowedColors, itemImages, demoCards };

const allowedBrands = [
  'Adidas',
  'Air Jordan',
  'Apple',
  'Balenciaga',
  'BAPE',
  'Barbour',
  'Burberry',
  'Celine',
  'Chanel',
  'Christian Louboutin',
  'Coach',
  'Commes des Garcons',
  'Dell',
  'Dior',
  'Dolce Gabanna',
  'Fendi',
  'Givenchy',
  'Google',
  'Hermes',
  'HP',
  'HTC',
  'Lenovo',
  'Louis Vuitton',
  'Microsoft',
  'Miu Miu',
  'Nike',
  'Nokia',
  'Prada',
  'Samsung',
  'Sony',
  'Tag Heure',
  'Valentino',
  'Other'
];

const allowedColors = [
  'black',
  'blue',
  'brown',
  'green',
  'grey',
  'gold',
  'orange',
  'pink',
  'purple',
  'red',
  'white',
  'yellow',
  'other'
];

const itemImages = {
  'Air Jordan': {
    'iairdior': {
      'grey': 'images/airjordan-iairdior-grey.png'
    },
    'iroyal': {
      'blue': 'images/airjordan-iroyal-blue.png',
    },
    'itokyo': {
      'grey': 'images/airjordan-itokyo-grey.png'
    },
    'itravisscott': {
      'brown': 'images/airjordan-itravisscott-brown.png'
    },
    'iiidnm': {
      'white': 'images/airjordan-iiidnm-white.png',
    },
    'xivgymred': {
      'red': 'images/airjordan-xivgymred-red.png'
    }
  },
  'Adidas': {},
  'Apple': {
    'ipadpro': {
      'grey': 'images/apple-ipadpro-grey.png'
    },
    'iphone11': {
      'purple': 'images/apple-iphone11-purple.png',
    },
    'iphone11promax': {
      'green': 'images/apple-iphone11promax-green.png',
    },
    'macbookpro16': {
      'grey': 'images/apple-macbookpro16-grey.png'
    },
    'watchhermes': {
      'gold': 'images/apple-watchhermes-gold.png',
    }
  },
  'Balenciaga': {},
  'BAPE': {},
  'Barbour': {},
  'Burberry': {},
  'Canon': {
    'eos1dxmarkiii': {
      'black': 'images/canon-eos1dxmarkiii-black.png'
    }
  },
  'Celine': {
    'microluggage': {
      'green': 'images/celine-microluggage-green.png'
    }
  },
  'Chanel': {
    'classicjumbo': {
      'black': 'images/chanel-classicjumbo-black.png'
    }
  },
  'Christian Louboutin': {},
  'Coach': {},
  'Commes des Garcons': {},
  'Dell': {
    'alienwareaurorar11': {
      'white': 'images/dell-alienwareaurorar11-white.png'
    }
  },
  'Dior': {
    'ladydlite': {
      'pink': 'images/dior-ladydlite-pink.png'
    }
  },
  'Dolce Gabanna': {},
  'Fendi': {
    'shieldsunglasses': {
      'blue': 'images/fendi-shieldsunglasses-blue.png'
    }
  },
  'Givenchy': {},
  'Google': {},
  'Hermes': {
    'birkin35': {
      'gold': 'images/hermes-birkin35-gold.png',
      'pink': 'images/hermes-birkin35-pink.png'
    }
  },
  'HTC': {},
  'HP': {},
  'Lenovo': {},
  'Louis Vuitton': {
    'escaleneverfull': {
      'pink': 'images/louisvuitton-escaleneverfull-pink.png'
    }
  },
  'Microsoft': {},
  'Miu Miu': {},
  'Nike': {
    'airmax1': {
      'orange': 'images/nike-airmax1-orange.png'
    }
  },
  'Nokia': {},
  'Prada': {},
  'Samsung': {},
  'Sony': {},
  'Tag Heure': {
    'monacocalibre': {
      'blue': 'images/tagheure-monacocalibre-blue.png'
    }
  },
  'Valentino': {},
  'Other': {}
};

const demoCards = {
  'hermes-birkin35-gold': {
    key     : 'hermes-birkin35-gold',
    brand   : 'Hermes',
    color   : 'gold',
    product : 'Birkin 35',
    img     : itemImages['Hermes']['birkin35']['gold'],
    price   : 13175,
    uses    : 1,
    goal    : 1825,
    status  : false
  },
  'chanel-classicjumbo-black': {
    key     : 'chanel-classicjumbo-black',
    brand   : 'Chanel',
    color   : 'black',
    product : 'Classic Jumbo',
    img     : itemImages['Chanel']['classicjumbo']['black'],
    price   : 7730,
    uses    : 5,
    goal    : 78,
    status  : false
  },
  'louisvuitton-escaleneverfull-pink': {
    key     : 'louisvuitton-escaleneverfull-pink',
    brand   : 'Louis Vuitton',
    color   : 'pink',
    product : 'Escale Neverfull',
    img     : itemImages['Louis Vuitton']['escaleneverfull']['pink'],
    price   : 2363,
    uses    : 1,
    goal    : 24,
    status  : false
  },
  'apple-iphone11-purple': {
    key     : 'apple-iphone11-purple',
    brand   : 'Apple',
    color   : 'purple',
    product : 'iPhone 11',
    img     : itemImages['Apple']['iphone11']['purple'],
    price   : 925,
    uses    : 100,
    goal    : 1095,
    status  : false
  },
  'fendi-shieldsunglasses-blue': {
    key     : 'fendi-shieldsunglasses-blue',
    brand   : 'Fendi',
    color   : 'blue',
    product : 'Shield Sunglasses',
    img     : itemImages['Fendi']['shieldsunglasses']['blue'],
    price   : 520,
    uses    : 51,
    goal    : 50,
    status  : false
  },
  'airjordan-xivgymred-red': {
    key     : 'airjordan-xivgymred-red',
    brand   : 'Air Jordan',
    color   : 'red',
    product : 'XIV Gym Red',
    img     : itemImages['Air Jordan']['xivgymred']['red'],
    price   : 201,
    uses    : 19,
    goal    : 500,
    status  : false
  },
  'airjordan-iairdiorgrey': {
    key     : 'airjordan-iairdiorgrey',
    brand   : 'Air Jordan',
    color   : 'grey',
    product : 'I Air Dior',
    img     : itemImages['Air Jordan']['iairdior']['grey'],
    price   : 2178,
    uses    : 19,
    goal    : 500,
    status  : false
  },
  'nike-airmax1-orange': {
    key     : 'nike-airmax1-orange',
    brand   : 'Nike',
    color   : 'orange',
    product : 'Air Max 1',
    img     : itemImages['Nike']['airmax1']['orange'],
    price   : 153,
    uses    : 19,
    goal    : 500,
    status  : false
  },
  'celine-microluggage-green': {
    key     : 'celine-microluggage-green',
    brand   : 'Celine',
    color   : 'green',
    product : 'Micro Luggage',
    img     : itemImages['Celine']['microluggage']['green'],
    price   : 2777,
    uses    : 19,
    goal    : 21,
    status  : false
  },
  'airjordan-itravisscott-brown': {
    key     : 'airjordan-itravisscott-brown',
    brand   : 'Air Jordan',
    color   : 'brown',
    product : 'I Travis Scott',
    img     : itemImages['Air Jordan']['itravisscott']['brown'],
    price   : 1594,
    uses    : 19,
    goal    : 500,
    status  : false
  },
  'apple-ipadpro-grey': {
    key     : 'apple-ipadpro-grey',
    brand   : 'Apple',
    color   : 'grey',
    product : 'iPad Pro',
    img     : itemImages['Apple']['ipadpro']['grey'],
    price   : 1687,
    uses    : 19,
    goal    : 300,
    status  : false
  },
  'apple-watchhermes-gold': {
    key     : 'apple-watchhermes-gold',
    brand   : 'Apple',
    color   : 'gold',
    product : 'Watch Hermes',
    img     : itemImages['Apple']['watchhermes']['gold'],
    price   : 1415,
    uses    : 19,
    goal    : 1095,
    status  : false
  },
  'apple-iphone11promax-green': {
    key     : 'apple-iphone11promax-green',
    brand   : 'Apple',
    color   : 'green',
    product : 'iPhone 11 Pro Max',
    img     : itemImages['Apple']['iphone11promax']['green'],
    price   : 1877,
    uses    : 19,
    goal    : 1095,
    status  : false
  },
  'airjordan-iroyal-blue': {
    key     : 'airjordan-iroyal-blue',
    brand   : 'Air Jordan',
    color   : 'blue',
    product : 'I Royal',
    img     : itemImages['Air Jordan']['iroyal']['blue'],
    price   : 342,
    uses    : 19,
    goal    : 500,
    status  : false
  },
  'airjordan-iiidnm-white': {
    key     : 'airjordan-iiidnm-white',
    brand   : 'Air Jordan',
    color   : 'white',
    product : 'III DNM',
    img     : itemImages['Air Jordan']['iiidnm']['white'],
    price   : 218,
    uses    : 19,
    goal    : 500,
    status  : false
  },
  'canon-eos1dxmarkiii-black': {
    key     : 'canon-eos1dxmarkiii-black',
    brand   : 'Canon',
    color   : 'black',
    product : 'EOS-1D X Mark III',
    img     : itemImages['Canon']['eos1dxmarkiii']['black'],
    price   : 7076,
    uses    : 19,
    goal    : 1095,
    status  : false
  },
  'dell-alienwareaurorar11-white': {
    key     : 'dell-alienwareaurorar11-white',
    brand   : 'Dell',
    color   : 'white',
    product : 'Alienware Aurora R11',
    img     : itemImages['Dell']['alienwareaurorar11']['white'],
    price   : 6086,
    uses    : 19,
    goal    : 1825,
    status  : false
  },
  'hermes-birkin35-pink': {
    key     : 'hermes-birkin35-pink',
    brand   : 'Hermes',
    color   : 'pink',
    product : 'Birkin 35',
    img     : itemImages['Hermes']['birkin35']['pink'],
    price   : 13175,
    uses    : 19,
    goal    : 1825,
    status  : false
  },
  'apple-macbookpro16-grey': {
    key     : 'apple-macbookpro16-grey',
    brand   : 'Apple',
    color   : 'grey',
    product : 'Macbook Pro 16',
    img     : itemImages['Apple']['macbookpro16']['grey'],
    price   : 6619,
    uses    : 19,
    goal    : 1825,
    status  : false
  },
  'tagheure-monacocalibre-blue': {
    key     : 'tagheure-monacocalibre-blue',
    brand   : 'Tag Heure',
    color   : 'blue',
    product : 'Monaco Calibre',
    img     : itemImages['Tag Heure']['monacocalibre']['blue'],
    price   : 6914,
    uses    : 19,
    goal    : 1825,
    status  : false
  },
};

// const demoCards = [
//   {
//     key     : 'hermes-birkin35-gold',
//     brand   : 'Hermes',
//     color   : 'gold',
//     product : 'Birkin 35',
//     img     : itemImages['Hermes']['birkin35']['gold'],
//     price   : 13175,
//     uses    : 1,
//     goal    : 1825,
//     status  : false
//   },
//   {
//     key     : 'chanel-classicjumbo-black',
//     brand   : 'Chanel',
//     color   : 'black',
//     product : 'Classic Jumbo',
//     img     : itemImages['Chanel']['classicjumbo']['black'],
//     price   : 7730,
//     uses    : 5,
//     goal    : 78,
//     status  : false
//   },
//   {
//     key     : 'louisvuitton-escaleneverfull-pink',
//     brand   : 'Louis Vuitton',
//     color   : 'pink',
//     product : 'Escale Neverfull',
//     img     : itemImages['Louis Vuitton']['escaleneverfull']['pink'],
//     price   : 2363,
//     uses    : 1,
//     goal    : 24,
//     status  : false
//   },
//   {
//     key     : 'apple-iphone11-purple',
//     brand   : 'Apple',
//     color   : 'purple',
//     product : 'iPhone 11',
//     img     : itemImages['Apple']['iphone11']['purple'],
//     price   : 925,
//     uses    : 100,
//     goal    : 1095,
//     status  : false
//   },
//   {
//     key     : 'fendi-shieldsunglasses-blue',
//     brand   : 'Fendi',
//     color   : 'blue',
//     product : 'Shield Sunglasses',
//     img     : itemImages['Fendi']['shieldsunglasses']['blue'],
//     price   : 520,
//     uses    : 51,
//     goal    : 50,
//     status  : false
//   },
//   {
//     key     : 'airjordan-xivgymred-red',
//     brand   : 'Air Jordan',
//     color   : 'red',
//     product : 'XIV Gym Red',
//     img     : itemImages['Air Jordan']['xivgymred']['red'],
//     price   : 201,
//     uses    : 19,
//     goal    : 500,
//     status  : false
//   },
//   {
//     key     : 'airjordan-iairdiorgrey',
//     brand   : 'Air Jordan',
//     color   : 'grey',
//     product : 'I Air Dior',
//     img     : itemImages['Air Jordan']['iairdior']['grey'],
//     price   : 2178,
//     uses    : 19,
//     goal    : 500,
//     status  : false
//   },
//   {
//     key     : 'nike-airmax1-orange',
//     brand   : 'Nike',
//     color   : 'orange',
//     product : 'Air Max 1',
//     img     : itemImages['Nike']['airmax1']['orange'],
//     price   : 153,
//     uses    : 19,
//     goal    : 500,
//     status  : false
//   },
//   {
//     key     : 'celine-microluggage-green',
//     brand   : 'Celine',
//     color   : 'green',
//     product : 'Micro Luggage',
//     img     : itemImages['Celine']['microluggage']['green'],
//     price   : 2777,
//     uses    : 19,
//     goal    : 21,
//     status  : false
//   },
//   {
//     key     : 'airjordan-itravisscott-brown',
//     brand   : 'Air Jordan',
//     color   : 'brown',
//     product : 'I Travis Scott',
//     img     : itemImages['Air Jordan']['itravisscott']['brown'],
//     price   : 1594,
//     uses    : 19,
//     goal    : 500,
//     status  : false
//   },
//   {
//     key     : 'apple-ipadpro-grey',
//     brand   : 'Apple',
//     color   : 'grey',
//     product : 'iPad Pro',
//     img     : itemImages['Apple']['ipadpro']['grey'],
//     price   : 1687,
//     uses    : 19,
//     goal    : 300,
//     status  : false
//   },
//   {
//     key     : 'apple-watchhermes-gold',
//     brand   : 'Apple',
//     color   : 'gold',
//     product : 'Watch Hermes',
//     img     : itemImages['Apple']['watchhermes']['gold'],
//     price   : 1415,
//     uses    : 19,
//     goal    : 1095,
//     status  : false
//   },
//   {
//     key     : 'apple-iphone11promax-green',
//     brand   : 'Apple',
//     color   : 'green',
//     product : 'iPhone 11 Pro Max',
//     img     : itemImages['Apple']['iphone11promax']['green'],
//     price   : 1877,
//     uses    : 19,
//     goal    : 1095,
//     status  : false
//   },
//   {
//     key     : 'airjordan-iroyal-blue',
//     brand   : 'Air Jordan',
//     color   : 'blue',
//     product : 'I Royal',
//     img     : itemImages['Air Jordan']['iroyal']['blue'],
//     price   : 342,
//     uses    : 19,
//     goal    : 500,
//     status  : false
//   },
//   {
//     key     : 'airjordan-iiidnm-white',
//     brand   : 'Air Jordan',
//     color   : 'white',
//     product : 'III DNM',
//     img     : itemImages['Air Jordan']['iiidnm']['white'],
//     price   : 218,
//     uses    : 19,
//     goal    : 500,
//     status  : false
//   },
//   {
//     key     : 'canon-eos1dxmarkiii-black',
//     brand   : 'Canon',
//     color   : 'black',
//     product : 'EOS-1D X Mark III',
//     img     : itemImages['Canon']['eos1dxmarkiii']['black'],
//     price   : 7076,
//     uses    : 19,
//     goal    : 1095,
//     status  : false
//   },
//   {
//     key     : 'dell-alienwareaurorar11-white',
//     brand   : 'Dell',
//     color   : 'white',
//     product : 'Alienware Aurora R11',
//     img     : itemImages['Dell']['alienwareaurorar11']['white'],
//     price   : 6086,
//     uses    : 19,
//     goal    : 1825,
//     status  : false
//   },
//   {
//     key     : 'hermes-birkin35-pink',
//     brand   : 'Hermes',
//     color   : 'pink',
//     product : 'Birkin 35',
//     img     : itemImages['Hermes']['birkin35']['pink'],
//     price   : 13175,
//     uses    : 19,
//     goal    : 1825,
//     status  : false
//   },
//   {
//     key     : 'apple-macbookpro16-grey',
//     brand   : 'Apple',
//     color   : 'grey',
//     product : 'Macbook Pro 16',
//     img     : itemImages['Apple']['macbookpro16']['grey'],
//     price   : 6619,
//     uses    : 19,
//     goal    : 1825,
//     status  : false
//   },
//   {
//     key     : 'tagheure-monacocalibre-blue',
//     brand   : 'Tag Heure',
//     color   : 'blue',
//     product : 'Monaco Calibre',
//     img     : itemImages['Tag Heure']['monacocalibre']['blue'],
//     price   : 6619,
//     uses    : 19,
//     goal    : 1825,
//     status  : false
//   },
// ];