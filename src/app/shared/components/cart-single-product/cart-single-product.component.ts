import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-cart-single-product',
  templateUrl: './cart-single-product.component.html'
})
export class CartSingleProductComponent implements OnInit {
  @Input() product: IProduct;
  @Output() onUpdateitemInCart: any = new EventEmitter<any>();

  localQuantity: number;

  constructor() {}

  ngOnInit() {
    this.localQuantity = this.product.quantity;
  }
  // increase quantity
  increaseQuantity(): void {
    this.localQuantity++;
  }

  // decrease quantity
  decreaseQuantity(): void {
    this.localQuantity--;
  }

  // add to cart
  updateInCart(): void {
    // get a positive or a negative number to emit
    const quantity = this.localQuantity - this.product.quantity;
    this.onUpdateitemInCart.emit({productId: this.product.id, quantity});
  }

  // remove from cart
  removeFromCart(): void {
    this.onUpdateitemInCart.emit({productId: this.product.id, quantity: 0});
  }
}
