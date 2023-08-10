import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NikeShoesComponent } from './nike-shoes/nike-shoes.component';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AdidasShoesComponent } from './adidas-shoes/adidas-shoes.component';
import { NewBalanceShoesComponent } from './new-balance-shoes/new-balance-shoes.component';
import { PumaShoesComponent } from './puma-shoes/puma-shoes.component';
import { ShopAllComponent } from './shop-all/shop-all.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component'; 


@NgModule({
  declarations: [
    AppComponent,
    NikeShoesComponent,
    AdidasShoesComponent,
    NewBalanceShoesComponent,
    PumaShoesComponent,
    ShopAllComponent,
    AddToCartComponent,
    UserProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatDividerModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
