import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { IProduct } from '../models/product';
import { CatalogService } from './catalog.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCartSubject: BehaviorSubject<IProduct[]> = new BehaviorSubject<IProduct[]>([]);
  private productIdQuantityMapSubject: BehaviorSubject<Map<number, number>> = new BehaviorSubject(new Map());
  private totalPriceSubject: BehaviorSubject<number> = new BehaviorSubject(0);

  constructor(private catalog: CatalogService) {}

  getProductsInCart(): Observable<IProduct[]> {
    if (this.productsInCartSubject.getValue().length === 0) {
      // update productsInCartSubject value
      this.getProductsByIds(Array.from(this.productIdQuantityMapSubject.getValue().keys()))
      .pipe(first())
      .subscribe(products => {
        const machedQuantity = this.matchQuantity(products);
        this.productsInCartSubject.next(machedQuantity);
        this.calculateTotalPrice();
      }, err => {
        console.error(err);
      });
    }
    return this.productsInCartSubject.asObservable();
  }


  // get total sum of quantity in productIdQuantityMapSubject
  get getTotalQuantity(): Observable<number> {
    return new Observable(observer => {
      const productsMapSize = this.productIdQuantityMapSubject.getValue().size;
      if (productsMapSize === 0) {
        observer.next(0);
      } else {
        const quantity = Array.from(this.productIdQuantityMapSubject.getValue().values()).reduce((a, b) => a + b);
        observer.next(quantity);
      }
    });
  }

  get getTotalPrice(): Observable<number> {
    return this.totalPriceSubject.asObservable();
  }

  // get
  // add product to cart
  addProductToCart(productId: number, quantity: number): Observable<boolean> {
    return new Observable(observer => {
      // get productIdQuantityMapSubject value
      const productsInCart = this.productIdQuantityMapSubject.getValue();

      // if product is not in productsInCart
      if (!productsInCart.has(productId)) {
        // add product to productsInCart
        productsInCart.set(productId, quantity);
      } else {
        // update product quantity
        productsInCart.set(productId, productsInCart.get(productId) + quantity);
      }

      // update productsInCartSubject value
      this.getProductsByIds(Array.from(this.productIdQuantityMapSubject.getValue().keys()))
        .pipe(first())
        .subscribe(products => {
          const machedQuantity = this.matchQuantity(products);
          this.productsInCartSubject.next(machedQuantity);
          this.calculateTotalPrice();
          observer.next(true);
        }, err => {
          console.error(err);
          observer.next(false);
        });

    });
  }

  // remove product from cart
  removeProductFromCart(productId: number): Observable<boolean> {
    return new Observable(observer => {
      // get productIdQuantityMapSubject value
      const productsInCart = this.productIdQuantityMapSubject.getValue();
      // if product is in productsInCart
      if (productsInCart.has(productId)) {
        // remove product from productsInCart
        productsInCart.delete(productId);
      }
      // update productsInCartSubject value
      this.getProductsByIds(Array.from(this.productIdQuantityMapSubject.getValue().keys()))
        .pipe(first())
        .subscribe(products => {
          const machedQuantity = this.matchQuantity(products);
          this.productsInCartSubject.next(machedQuantity);
          this.calculateTotalPrice();
          observer.next(true);
        }, err => {
          console.error(err);
          observer.next(false);
        });
    });
  }

  // get products by ids from catalog service
  private getProductsByIds(productIds: number[]): Observable<IProduct[]> {
    return this.catalog.getProductsByIds(productIds);
  }

  // match quantity from productIdQuantityMapSubject to quantity in products list
  private matchQuantity(products: IProduct[]): IProduct[] {
    return products.map(product => {
      const productQuantity = this.productIdQuantityMapSubject.getValue().get(product.id);

      return Object.assign({}, product, { quantity: productQuantity });
    });
  }

  // calculate total price
  private calculateTotalPrice() {
    const products = this.productsInCartSubject.getValue();
    if (products.length === 0) {
      this.totalPriceSubject.next(0);
    } else {
      const totalPrice = products.reduce((acc, product) => acc + product.price * product.quantity, 0);
      this.totalPriceSubject.next(totalPrice);
    }
  }
}
