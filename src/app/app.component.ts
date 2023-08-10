import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchService } from './Service/search.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ecommerce-store';

  constructor(private searchService: SearchService, private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }

  navigateToCart(): void {
    this.router.navigate(['sneaker-shop/cart']);
  }

  searchQuery: string = '';

  onSearch(): void {
    this.searchService.setSearchQuery(this.searchQuery);
  }
}
