import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../../models/product';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent {
  @Input() product: IProduct;
  @Output() onAddToCart: any = new EventEmitter<any>();

  quantity = 1;

  constructor() { }

  // increase quantity
  increaseQuantity(): void {
    this.quantity++;
  }

  // decrease quantity
  decreaseQuantity(): void {
    this.quantity--;
  }

  // add to cart
  addToCart(): void {
    this.onAddToCart.emit({productId: this.product.id, quantity: this.quantity});
  }
}
