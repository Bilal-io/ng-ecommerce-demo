import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { IProduct } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class CatalogService {
  private productsListSubject: BehaviorSubject<IProduct[]>;
  private categoriesListSubject: BehaviorSubject<string[]>;
  // public notificationList = this.notificationListSubject.asObservable();

  constructor(private http: HttpClient) {
    this.productsListSubject = new BehaviorSubject<IProduct[]>(null);
    this.categoriesListSubject = new BehaviorSubject<string[]>(null);
  }


  // get all products form backend
  getAllProducts(category: string = 'All Categories'): Observable<IProduct[]> {
    return this.http.get(
      '/api/products',
      {
        params: {
          category
        }
      }
    ).pipe(
      map((products: IProduct[]) => {
        // set productsListSubject value to the products
        this.productsListSubject.next(products);
        return products;
      }), catchError(error => {
        console.error({error})
        return throwError( 'Something went wrong!' );
      })
    );
  }

  // get all categories from backend
  getCategories(): Observable<string[]> {
    return this.http.get(
      '/api/categories'
    ).pipe(
      map((categories: string[]) => {
        // set categoriesListSubject value to the categories
        this.categoriesListSubject.next(categories);
        return categories;
      }), catchError(error => {
        console.error({error})
        return throwError( 'Something went wrong!' );
      })
    );
  }

  // get all products by Ids form backend
  getProductsByIds(productIds: number[]): Observable<IProduct[]> {
    // convert array of ids to string
    const productIdsString = productIds.join(',');
    return this.http.get(
      '/api/products',
      {
        params: {
          productIds: productIdsString
        }
      }
    ).pipe(
      map((products: IProduct[]) => {
        return products;
      }), catchError(error => {
        console.error({error})
        return throwError( 'Something went wrong!' );
      })
    );
  }
}
