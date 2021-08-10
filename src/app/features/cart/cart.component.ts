import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent implements OnInit {
  products: Observable<IProduct[]>;
  subtotal: number;

  taxRate = 0.084;

  constructor(private cart: CartService) { }

  ngOnInit(): void {
    this.products = this.cart.getProductsInCart();
    this.cart.getTotalPrice.subscribe(total => {
      this.subtotal = total;
    });

  }

  // add to cart
  updateItem(event) {
    if (event.quantity === 0) {
      this.cart.removeProductFromCart(event.productId).subscribe();
    } else {
      this.cart.addProductToCart(event.productId, event.quantity).subscribe();
    }
  }
}
