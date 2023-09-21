import { Component, OnInit } from '@angular/core';
import { ShopAllService } from '../Service/shop-all.service';
import { Observable, forkJoin, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SearchService } from '../Service/search.service';

@Component({
  selector: 'app-shop-all',
  templateUrl: './shop-all.component.html',
  styleUrls: ['./shop-all.component.scss'],
})
export class ShopAllComponent implements OnInit {
  shoes: any[] = [];
  filteredShoes: any[] = [];
  cart: any[] = [];
  private searchSubscription: Subscription;
  searchQuery: string = '';

  currentIndex = 0;

  constructor(private shopAllService: ShopAllService, private router: Router, private searchService: SearchService) {
    this.fetchShoes();

    this.searchSubscription = this.searchService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
      this.applyFilter();
    });
  }

  ngOnDestroy(): void {
    this.searchSubscription.unsubscribe();
  }

  applyFilter(): void {
    this.filteredShoes = this.shoes.filter(
      (shoe) => shoe.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.fetchShoes();
  }

  fetchShoes(): void {
    const shoeServices = ['nike-shoes'];
    const shoeObservables: Observable<any>[] = [];

    for (const service of shoeServices) {
      const shoeObservable = this.shopAllService.getShoesFromLocalStorage(service);
      shoeObservables.push(shoeObservable);
    }

    forkJoin(shoeObservables).subscribe((shoes: any[]) => {
      this.shoes = this.shuffle(shoes.reduce((acc, val) => acc.concat(val), []));
      this.filteredShoes = [...this.shoes];
    });
  }

  shuffle(array: any[]): any[] {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  filterByBrand(brand: string): void {
    if (brand === 'All') {
      this.filteredShoes = [...this.shoes];
    } else {
      this.filteredShoes = this.shoes.filter((shoe) => shoe.brand === brand);
    }
  }

  filterByPrice(order: 'asc' | 'desc'): void {
    this.filteredShoes.sort((a, b) => {
      const priceA = parseFloat(a.price);
      const priceB = parseFloat(b.price);
      return order === 'asc' ? priceA - priceB : priceB - priceA;
    });
  }
  
  addToCart(shoe: any): void {
    this.cart.push(shoe);
  }

  addToCartAndNavigate(shoe: any): void {
    this.addToCart(shoe);
    this.router.navigate(['sneaker-shop/cart'], { queryParams: { shoe: JSON.stringify(shoe) } });
  }
}

