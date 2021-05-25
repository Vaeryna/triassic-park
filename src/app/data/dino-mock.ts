import { Dinosaure } from './dinosaures';
import { Type } from './types';

export const DINO: Dinosaure[] = [
  {
    id: "1",
    name: 'Velociraptor',
    size: '1,25',
    diet: 'carnivore',
    price: 10000,
    type: 'terrestre',
    img: '../../src/assets/img/velociraptor.png',
  },
  {
    id: "2",
    name: 'Pteranodon',
    size: '5,6',
    diet: 'carnivore',
    price: 5000,
    type: 'volant',
    img: '../../src/assets/img/velociraptor.png',
  },
  {
    id: "3",
    name: 'Sarcosuchus',
    size: '11',
    diet: 'carnivore',
    price: 7000,
    type: 'aquatique',
    img: '../../src/assets/img/velociraptor.png',
  },
];

export const TYPE: Type[] = [
  {
    name: 'Terrestre',
  },
  {
    name: 'Aquatique',
  },
  {
    name: 'Volant',
  },
];
