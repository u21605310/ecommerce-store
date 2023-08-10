import { Component, OnInit } from '@angular/core';
import { NewBalanceEntityService } from '../Service/NewBalanceDbContext.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-balance-shoes',
  templateUrl: './new-balance-shoes.component.html',
  styleUrls: ['./new-balance-shoes.component.scss']
})
export class NewBalanceShoesComponent implements OnInit{

  newBalanceShoes!: any[];
  filteredShoes!: any[];
  sortByPrice: string = 'highest';
  cart: any[]= [];

  constructor(private newBalanceEntityService: NewBalanceEntityService, private router:Router) {}

  ngOnInit(): void {
    this.newBalanceEntityService.setNewBalanceShoesData();
    const storedShoes = localStorage.getItem('new-balance-shoes');
    this.newBalanceShoes = storedShoes ? JSON.parse(storedShoes) : [];
    this.filteredShoes = [...this.newBalanceShoes];
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredShoes = this.newBalanceShoes.filter((shoe: any) => {
      if (this.sortByPrice === 'lowest') {
        return true;
      } else if (this.sortByPrice === 'highest') {
        return true;
      }
      return false;
    });

    // Sort by price
    if (this.sortByPrice === 'lowest') {
      this.filteredShoes.sort((a, b) => a.price - b.price);
    } else if (this.sortByPrice === 'highest') {
      this.filteredShoes.sort((a, b) => b.price - a.price);
    }

    // Set initial image index for each shoe
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
