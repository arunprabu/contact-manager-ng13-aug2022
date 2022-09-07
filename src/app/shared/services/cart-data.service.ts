import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartDataService {

  // Step 1: have default cart items 
  private currentCartItems: any[] = [
    {
      id: 1,
      name: 'Apple',
      category: 'Fruits',
      price: '$2.76'
    }
  ];

  // Step 2: Let's work on observable. so that any comp can subscribe to it 
  // Step 2.1. create an obj of BehaviourSubject with the currentCartItems as default data
  private cartItemList = new BehaviorSubject(this.currentCartItems);

  // Step 2.2 Let's make cartItemList as observable. 
  latestCartItems: Observable<any[]> = this.cartItemList.asObservable(); 
  // Now check, latestCartItems will have a method subscribe. Any comp can subscribe 

  constructor() {
    
  }

  updateCart(product: any){
    console.log(product);
    // Let's update the cart items
    this.latestCartItems.pipe(take(1)).subscribe( (defaultCartItems) => {
      console.log(defaultCartItems);
      const newCartItems = [...defaultCartItems, product];
      this.cartItemList.next(newCartItems);
    });
  }
}
