import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adidas-shoes',
  templateUrl: './adidas-shoes.component.html',
  styleUrls: ['./adidas-shoes.component.scss']
})
export class AdidasShoesComponent {

  adidasShoes!: any[];
  filteredShoes!: any[];
  sortByPrice: string = 'highest';
  cart: any[] = [];

  constructor(private router: Router){}

  ngOnInit(): void {
    const storedShoes = localStorage.getItem('adidas-shoes');
    this.adidasShoes = storedShoes ? JSON.parse(storedShoes) : [];
    this.filteredShoes = [...this.adidasShoes];
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredShoes = this.adidasShoes.filter((shoe: any) => {
      if (this.sortByPrice === 'lowest') {
        return true;
      } else if (this.sortByPrice === 'highest') {
        return true;
      }
      return false;
    });

    if (this.sortByPrice === 'lowest') {
      this.filteredShoes.sort((a, b) => a.price - b.price);
    } else if (this.sortByPrice === 'highest') {
      this.filteredShoes.sort((a, b) => b.price - a.price);
    }

    this.filteredShoes.forEach((shoe:any) => {
      shoe.currentImage = 0;
    })
  }

  prevImage(shoe: any): void {
    shoe.currentImage = (shoe.currentImage - 1 + shoe.images.length) % shoe.images.length;
  }

  nextImage(shoe: any): void {
    shoe.currentImage = (shoe.currentImage + 1) % shoe.images.length;
  }

  getCurrentImage(shoe: any): string {
    return shoe.images[shoe.currentImage];
  }

  addToCart(shoe: any): void {
    this.cart.push(shoe);
  }

  addToCartAndNavigate(shoe: any): void {
    this.addToCart(shoe);
    this.router.navigate(['sneaker-shop/cart'], { queryParams: { shoe: JSON.stringify(shoe) } });
  }
}
