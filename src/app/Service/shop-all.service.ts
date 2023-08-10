import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShopAllService {

  constructor() { }

  getShoesFromLocalStorage(key: string): Observable<any[]> {
    const shoes = JSON.parse(localStorage.getItem(key) || '[]');
    return of(shoes);
  }
}
