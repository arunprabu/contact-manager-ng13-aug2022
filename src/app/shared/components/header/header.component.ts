import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { CartDataService } from '../../services/cart-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None // check the elements tab in chrome inspector 
  // attributes won't be generate for html elements-- thus styles will be available to the descendents
})
export class HeaderComponent implements OnInit {

  cartCount = 0;

  constructor( private cartDataService: CartDataService) { }

  ngOnInit(): void {
    this.cartDataService.latestCartItems.subscribe( (cartItems) => {
      console.log(cartItems);
      this.cartCount = cartItems.length;
    });
  }

}
