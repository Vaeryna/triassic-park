import { Dinosaure } from './dinosaures';
import { TypeDino } from './types';

export const DINO: Dinosaure[] = [
  {
    id: "1",
    name: 'Velociraptor',
    size: '1,25',
    diet: 'carnivore',
    price: 10000,
    type: 'terrestre',
    img: '../../src/assets/img/Velociraptor.png',
  },
  {
    id: "2",
    name: 'Pteranodon',
    size: '5,6',
    diet: 'carnivore',
    price: 5000,
    type: 'volant',
    img: '../../src/assets/img/Pteranodon.png',
  },
  {
    id: "3",
    name: 'Sarcosuchus',
    size: '11',
    diet: 'carnivore',
    price: 7000,
    type: 'aquatique',
    img: '../../src/assets/img/Sarchosuchus.png',
  },
  {
    id: "4",
    name: 'T-Rex',
    size: '6',
    diet: 'carnivore',
    price: 15000,
    type: 'terrestre',
    img: '../../src/assets/img/Trex.png',
  },
];

export const TYPE: TypeDino[] = [
  {
    id: "id1",
    name: 'terrestre',
  },
  {id: "id2",
    name: 'aquatique',
  },
  {
    id: "id2",
    name: 'volant',
  },
];
