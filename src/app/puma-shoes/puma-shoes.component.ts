import { Component, OnInit } from '@angular/core';
import { PumaEntityService } from '../Service/PumaDbContext.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-puma-shoes',
  templateUrl: './puma-shoes.component.html',
  styleUrls: ['./puma-shoes.component.scss']
})
export class PumaShoesComponent implements OnInit{
  
  pumaShoes!: any[];
  filteredShoes!: any[];
  sortByPrice: string = 'highest';
  cart: any[] = [];

  constructor(private pumaEntityService: PumaEntityService, private router: Router) {}

  ngOnInit(): void {
    this.pumaEntityService.setPumaShoesData();
    const storedShoes = localStorage.getItem('puma-shoes');
    this.pumaShoes = storedShoes ? JSON.parse(storedShoes) : [];
    this.filteredShoes = [...this.pumaShoes];
    this.applyFilters();
  }

  applyFilters(): void {
    this.filteredShoes = this.pumaShoes.filter((shoe: any) => {
      
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
