import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
  HttpResponse,
  HttpStatusCode
} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';

// import all products from a json file
import products from '../../../data/products.json';
import { IProduct } from 'src/app/shared/models/product';


// defined a fake user
const user = {
  name: 'David Gotta',
  email: 'david@gotta.co',
  id: "1",
  avatar: 'https://avatars2.githubusercontent.com/u/1414076?v=3&s=460'
};

@Injectable()
export class FakeServerInterceptor implements HttpInterceptor {

  // implement fake backend interceptor
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // deconstruct request
    const { url, method, headers, body, params } = request;

    // define route handler
    const handler = (event: HttpEvent<any>): Observable<HttpEvent<any>> => {
      // switch on url value
      switch (url) {
        // return fake users
        case '/api/authenticate':
          return authenticateUser(body.email, body.password);
        // return products
        case '/api/products':
          return getProducts();
        // return all categories
        case '/api/categories':
          return getCategories();
        default:
          // all unhandled requests return 404
          return next.handle(request);
      }
    };

    // authenticate user
    const authenticateUser = (email: string, password: string) => {
      // if email or password is incorrect, retunn 401
      if (password !== 'tea' || email !== user.email) {
        return response401();
      }

      return response200(user);
    };

    // get products
    const getProducts = () => {
      const category = params.get('category');
      const productIds = params.get('productIds');

      // if products ids array is defined, return products by ids
      if (productIds || productIds === '') {
        const productIdsArray = productIds.split(',');
        const products = filterProductsByIds(productIdsArray);
        return response200(products);
      }

      // if category is defined, return products by category
      if (category && category !== 'All Categories') {
        const products = filterProductsByCategory(category);
        return response200(products);
      }

      // if category is not defined, return all products
      return response200(products);
    };

    // get categories
    const getCategories = () => {
      return response200(getUniqueCategories());
    };

    // response 200
    const response200 = (body: any) => {
      const ss = ({})
      return of(new HttpResponse({
        status: HttpStatusCode.Ok,
        body
      }))
    };

    // response 401
    const response401 = () => {
      return throwError({
        status: HttpStatusCode.Unauthorized,
        body: 'Unauthorized'
      });
    };

    // return delayed observable
    return of(null)
    .pipe(mergeMap(handler))
    .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
    .pipe(delay(500))
    .pipe(dematerialize());
  }
}


// helper functions for products
// product pagination

// filter products by category
const filterProductsByCategory = (category: string) => {
  return products.filter(product => product.category === category);
};
// filter products using array of product ids
const filterProductsByIds = (ids: string[]) => {
  return products.filter((product: IProduct) => ids.indexOf(product.id.toString()) > -1);
};
// get all unique categories
const getUniqueCategories = () => {
  return products.map(product => product.category).filter((value, index, self) => self.indexOf(value) === index);
};
