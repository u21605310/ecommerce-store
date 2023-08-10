import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.scss']
})
export class AddToCartComponent implements OnInit {
  cartItems: any[] = [];
  shoeToAdd: any;
  quantity = 1;
  note = '';

  constructor(private route: ActivatedRoute, private snackBar: MatSnackBar) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params && params['shoe']) {
        this.shoeToAdd = JSON.parse(params['shoe']);
      }
    });
  }

  addToCart(shoe: any): void {
    const itemToAdd = {
      name: shoe.name,
      brand: shoe.brand,
      price: shoe.price,
      image: shoe.images[0],
      size: null,
      quantity: this.quantity,
      note: this.note
    };
    this.cartItems.push(itemToAdd);
  }

  removeFromCart(index: number): void {
    if (index >= 0 && index < this.cartItems.length) {
      this.cartItems.splice(index, 1);
    }
  }

  proceedToCheckout(): void {

    this.snackBar.open('Order placed successfully!', 'Close', {
      duration: 3000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}