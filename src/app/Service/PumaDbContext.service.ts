import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PumaEntityService {

  constructor() { }

  setPumaShoesData(): void {
    const shoes = [
      {
        id: 1,
        name: "Rs-Metric",
        description: "Coolest shoe",
        images: [
          "assets/Rs-Metric-1.jpeg",
          "assets/Rs-Metric-2.jpeg"
        ],
        
        price: 1899.95,
        sizes: ["5", "6", "7", "8", "9", "10"],
        brand: "Puma"
      },
      {
        id: 2,
        name: "RBD Game Low",
        description: "coolest shoe",
        images: [
          "assets/RBD-Game-Low-1.jpeg",
          "assets/RBD-Game-Low-2.jpeg",
          "assets/RBD-Game-Low-3.jpeg"
        ],
        price: 1399.95,
        sizes: ["3", "6", "7", "8", "9"],
        brand: "Puma"
      },
      {
        id: 3,
        name: "Slipstream",
        description: "coolest shoe",
        images: [
          "assets/Slipstream-1.jpeg",
          "assets/Slipstream-2.jpeg"
        ],
        price: 1999.95,
        sizes: ["4", "5", "9", "11"],
        brand: "Puma"
      },
      {
        id: 4,
        name: "Rs-X Efekt Gradient Low",
        description: "coolest shoe",
        images: [
          "assets/Rs-Efekt-1.jpeg",
          "assets/Rs-Efekt-2.jpeg"
        ],
        price: 2399.95,
        sizes: ["4", "5", "9", "11"],
        brand: "Puma"
      }
    ];

    const shoesJSON = JSON.stringify(shoes);
    window.localStorage.setItem('puma-shoes', shoesJSON);
  }
}
