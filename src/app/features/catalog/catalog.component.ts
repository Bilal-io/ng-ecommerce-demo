import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { IProduct } from 'src/app/shared/models/product';
import { CartService } from 'src/app/shared/services/cart.service';
import { CatalogService } from 'src/app/shared/services/catalog.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html'
})
export class CatalogComponent implements OnInit {
  pageLength = 12;
  pageNumber = 1;
  numberOfPages: number;
  categories: string[];
  selectedCategory: BehaviorSubject<string> = new BehaviorSubject('All Categories');
  products: Observable<IProduct[]>;
  dd: IProduct[];
  categorySubscription: Subscription;

  constructor(
    public catalog: CatalogService,
    private cart: CartService
  ) {}

  ngOnInit() {
    // get categories
    this.getCategories();

    // subscribe to selectedCategory to get products whenever category changes
    this.categorySubscription = this.selectedCategory.subscribe(category => {
      this.products = this.catalog.getAllProducts(category);
    });
  }

  calculatePages(productsLength: number) {
    this.numberOfPages = Math.ceil(productsLength / this.pageLength);
  }

  // get categories
  getCategories() {
    this.catalog.getCategories().subscribe(categories => {
      this.categories = categories;
    });
  }

  // nagigate to next page
  nextPage() {
    this.pageNumber++;
  }

  // navigate to previous page
  previousPage() {
    this.pageNumber--;
  }

  // add to cart
  addToCart(event) {
    this.cart.addProductToCart(event.productId, event.quantity).subscribe();
  }

  // change selected category
  changeSelectedCategory(category: string) {
    this.selectedCategory.next(category);
  }
}
