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
        name: "Megumi Fushiguro",
        description: "",
        images: [
          "assets/Megumi_Fushiguro.jpeg"
        ],
        
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"]
      },
      {
        id: 2,
        name: "Demon Slayer",
        description: "",
        images: [
          "assets/demon_slayer.jpeg",

        ],
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"]
      },
      {
        id: 3,
        name: "Kyojuro Rengoku",
        description: "",
        images: [
          "assets/Kyojuro_Rengoku.jpeg",
        ],
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"]
      },
      {
        id: 4,
        name: "Berserk",
        description: "",
        images: [
          "assets/Berserk.jpeg",
        ],
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"]
      },
      {
        id: 5,
        name: "Ippo Makunouchi Dempsey Roll",
        description: "",
        images: [
          "assets/ippo_mak.jpeg",
        ],
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"]
      },
      {
        id: 6,
        name: "Tanjiro Kamando",
        description: "",
        images: [
          "assets/Tanjido.jpeg",
        ],
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"]
      },
      {
        id: 7,
        name: "Kid BUU",
        description: "",
        images: [
          "assets/Kidd_BUU.jpeg",
        ],
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"]
      },
      {
        id: 8,
        name: "Zenitsu Agatsuma",
        description: "",
        images: [
          "assets/Zenintsu.jpeg",
        ],
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"]
      },
      {
        id: 9,
        name: "Goku x Vegeta",
        description: "",
        images: [
          "assets/GokuxVegeta.jpeg",
        ],
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"]
      },
      {
        id: 10,
        name: "Vegeta",
        description: "",
        images: [
          "assets/Vegeta.jpeg",
        ],
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"]
      },
      {
        id: 11,
        name: "Naruto",
        description: "",
        images: [
          "assets/Naruto.jpeg",
        ],
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"]
      },
      {
        id: 12,
        name: "Zoro",
        description: "",
        images: [
          "assets/Zoro.jpeg",
        ],
        price: 250,
        sizes: ["Small", "Medium", "Large", "Extra large"],
        brand: "Otaku Haven"
      }
    ];

    const shoesJSON = JSON.stringify(shoes);
    window.localStorage.setItem('nike-shoes', shoesJSON);
  }
}
