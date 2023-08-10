import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewBalanceEntityService {

  constructor() { }

  setNewBalanceShoesData(): void {
    const shoes = [
      {
        id: 1,
        name: "550",
        description: "Coolest shoe",
        images: [
          "assets/NB-550-1.jpeg",
          "assets/NB-550-2.jpeg",
          "assets/NB-550-3.jpeg"
        ],
        
        price: 2399.95,
        sizes: ["5", "6", "7", "8", "9", "10"],
        brand: "New Balance"
      },
      {
        id: 2,
        name: "327",
        description: "coolest shoe",
        images: [
          "assets/NB-327-1.jpeg",
          "assets/NB-327-2.jpeg",
          "assets/NB-327-3.jpeg"
        ],
        price: 2199.95,
        sizes: ["3", "6", "7", "8", "9"],
        brand: "New Balance"
      },
      {
        id: 3,
        name: "480",
        description: "coolest shoe",
        images: [
          "assets/NB-450-2.jpeg",
          "assets/NB-450-1.jpeg",
          "assets/NB-450-3.jpeg"
        ],
        price: 1699.95,
        sizes: ["4", "5", "9", "11"],
        brand: "New Balance"
      }
    ];

    const shoesJSON = JSON.stringify(shoes);
    window.localStorage.setItem('new-balance-shoes', shoesJSON);
  }
}
