import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdidasEntityService {

  constructor() { }

  setAdidasShoesData(): void {
    const shoes = [
      {
        id: 1,
        name: "Stan Smith",
        description: "Coolest shoe",
        images: [
          "assets/Stan-Smith-1.jpeg",
          "assets/Stan-Smith-2.jpeg",
          "assets/Stan-Smith-3.jpeg",
          "assets/Stan-Smith-4.jpeg"
        ],
        
        price: 1499.95,
        sizes: ["5", "6", "7", "8", "9", "10"],
        brand: "Adidas"
      },
      {
        id: 2,
        name: "Ozweego Adiprene",
        description: "coolest shoe",
        images: [
          "assets/Ozweego-Adiprene-2.jpeg",
          "assets/Ozweego-Adiprene-1.jpeg"
        ],
        price: 2199.95,
        sizes: ["3", "6", "7", "8", "9"],
        brand: "Adidas"
      },
      {
        id: 3,
        name: "Campus OO's",
        description: "coolest shoe",
        images: [
          "assets/Campus-1.jpeg",
          "assets/Campus-3.jpeg",
          "assets/Campus-2.jpeg"
        ],
        price: 2099,
        sizes: ["4", "5", "9", "11"],
        brand: "Adidas"
      }
    ];

    const shoesJSON = JSON.stringify(shoes);
    window.localStorage.setItem('adidas-shoes', shoesJSON);
  }
}
