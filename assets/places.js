/** @format */

const places = [
  {
    id: 0,
    name: 'Manga Cliff',
    images: ['cliff.jpg', 'leopard.jpg'],
    location: 'Nyamira',
    country: 'Kenya',
    details:
      'One of the most unique sights in the Fare Islands are "Drangarnir". Drangarnir are two sea stacks between Vágar and the islet Tindhólmur.',
    categories: [1, 2, 3, 4],
  },
  {
    id: 1,
    name: 'Old Town',
    images: ['cottagehouse.jpg', 'oldhouse.jpg'],
    location: 'Mombasa',
    country: 'Kenya',
    details:
      'One of the most unique sights in the Fare Islands are "Drangarnir". Drangarnir are two sea stacks between Vágar and the islet Tindhólmur.',
    categories: [1, 3],
  },
  {
    id: 2,
    name: 'The Makuti',
    images: ['makutihouse.jpg', 'makuti2.jpg'],
    location: 'Zanzibar',
    country: 'Tanzania',
    details:
      'One of the most unique sights in the Fare Islands are "Drangarnir". Drangarnir are two sea stacks between Vágar and the islet Tindhólmur.',
    categories: [3],
  },
  {
    id: 3,
    name: 'Maasai Mara',
    images: [
      'Giraffe.jpg',
      'giraffe2.jpg',
      'leopard.jpg',
      'safarimara.jpg',
      'marasafari.jpg',
    ],
    location: 'Narok',
    country: 'Kenya',
    details:
      'One of the most unique sights in the Fare Islands are "Drangarnir". Drangarnir are two sea stacks between Vágar and the islet Tindhólmur.',
    categories: [2, 3, 1],
  },
  {
    id: 4,
    name: ' Tsavo National Park',
    images: [
      'savanna.jpg',
      'safarimara.jpg',
      'elephantsafari.jpg',
      'safarijeep.jpg',
    ],
    location: 'Tsavo',
    country: 'Kenya',
    details:
      'One of the most unique sights in the Fare Islands are "Drangarnir". Drangarnir are two sea stacks between Vágar and the islet Tindhólmur.',
    categories: [1, 3],
  },
  {
    id: 5,
    name: 'Kisii Travellers',
    images: [
      'waterfall.jpg',
      'cottagehouse.jpg',
      'oldhouse.jpg',
      'bycycle.jpg',
      'lonehouse.jpg',
      'oldhouse.jpg',
    ],
    location: 'Kisii',
    country: 'Kenya',
    details:
      'One of the most unique sights in the Fare Islands are "Drangarnir". Drangarnir are two sea stacks between Vágar and the islet Tindhólmur.',
    categories: [3],
  },
]

const categories = [
  { id: 0, label: 'All', count: null, icon: '', color: 'black' },
  {
    id: 1,
    label: 'Hotels',
    count: places.filter(item => item.categories.includes(1)).length,
    icon: '',
    color: 'green',
  },
  {
    id: 2,
    label: 'Safari',
    count: places.filter(item => item.categories.includes(2)).length,
    icon: '',
    color: 'green',
  },
  {
    id: 3,
    label: 'Nature',
    count: places.filter(item => item.categories.includes(3)).length,
    icon: '',
    color: 'red',
  },
  {
    id: 4,
    label: 'Hiking',
    count: places.filter(item => item.categories.includes(4)).length,
    icon: '',
    color: 'blue',
  },
]

module.exports = { places, categories }
