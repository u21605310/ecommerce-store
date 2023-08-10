import { Component, OnInit } from '@angular/core';
import { NikeEntityService } from '../Service/NikeDbContext.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nike-shoes',
  templateUrl: './nike-shoes.component.html',
  styleUrls: ['./nike-shoes.component.scss'],
})
export class NikeShoesComponent implements OnInit {
  
  nikeShoes!: any[];
  filteredShoes!: any[];
  sortByPrice: string = 'highest';
  cart: any[] = [];

  constructor(private nikeEntityService: NikeEntityService, private router: Router) {}

  ngOnInit(): void {
    this.nikeEntityService.setNikeShoesData();
    const storedShoes = localStorage.getItem('nike-shoes');
    this.nikeShoes = storedShoes ? JSON.parse(storedShoes) : [];
    this.filteredShoes = [...this.nikeShoes];
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredShoes = this.nikeShoes.filter((shoe: any) => {

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

    this.filteredShoes.forEach((shoe: any) => {
      shoe.currentImage = 0;
    });
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


