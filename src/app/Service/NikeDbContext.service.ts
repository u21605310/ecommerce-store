import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NikeEntityService {

  constructor() { }
  
  setNikeShoesData(): void {
    const shoes = [
      {
        id: 1,
        name: "Air Force 1",
        description: "Coolest shoe",
        images: [
          "assets/AirForce-1.jpeg",
          "assets/AirForce-2.jpeg",
          "assets/AirForce-3.jpeg"
        ],
        
        price: 2399,
        sizes: ["5", "6", "7", "8", "9", "10"],
        brand: "Nike"
      },
      {
        id: 2,
        name: "Air Max Plus",
        description: "coolest shoe",
        images: [
          "assets/AirMaxPlus-1.jpeg",
          "assets/AirMaxPlus-2.jpeg",
          "assets/AirMaxPlus-3.jpeg"
        ],
        price: 2999,
        sizes: ["3", "6", "7", "8", "9"],
        brand: "Nike"
      },
      {
        id: 3,
        name: "Dunk Low",
        description: "coolest shoe",
        images: [
          "assets/Dunk-1.jpeg",
          "assets/Dunk-2.jpeg",
          "assets/Dunk-3.jpeg"
        ],
        price: 2099,
        sizes: ["4", "5", "9", "11"],
        brand: "Nike"
      },
      {
        id: 4,
        name: "Jordan 1 Low",
        description: "coolest shoe",
        images: [
          "assets/AirJordan-1.jpeg",
          "assets/AirJordan-2.jpeg",
          "assets/AirJordan-3.jpeg"
        ],
        price: 2299,
        sizes: ["4", "5", "9", "11"],
        brand: "Nike"
      }
    ];

    const shoesJSON = JSON.stringify(shoes);
    window.localStorage.setItem('nike-shoes', shoesJSON);
  }
}
