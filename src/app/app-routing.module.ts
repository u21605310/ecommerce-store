import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NikeShoesComponent } from './nike-shoes/nike-shoes.component';
import { PumaShoesComponent } from './puma-shoes/puma-shoes.component';
import { AdidasShoesComponent } from './adidas-shoes/adidas-shoes.component';
import { NewBalanceShoesComponent } from './new-balance-shoes/new-balance-shoes.component';
import { ShopAllComponent } from './shop-all/shop-all.component';
import { AddToCartComponent } from './add-to-cart/add-to-cart.component';
import { UserProfileComponent } from './user-profile/user-profile.component';

const routes: Routes = [
  {path: 'sneaker-shop', component: ShopAllComponent},
  {path: 'sneaker-shop/nike-shoes', component: NikeShoesComponent},
  {path: 'sneaker-shop/puma-shoes', component: PumaShoesComponent},
  {path: 'sneaker-shop/adidas-shoes', component: AdidasShoesComponent},
  {path: 'sneaker-shop/new-balance-shoes', component: NewBalanceShoesComponent},
  {path: 'sneaker-shop/cart', component: AddToCartComponent},
  {path: 'sneaker-shop/user-profile', component: UserProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
