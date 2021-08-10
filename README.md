# Angular Ecommerce Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## App structure
This app has the following structure:
app/
┣ core/
┃ ┣ auth/
┃ ┃ ┣ auth.module.ts
┃ ┃ ┣ catalog.guard.ts
┃ ┃ ┗ login.guard.ts
┃ ┣ interceptors/
┃ ┃ ┗ fakeServer.interceptor.ts
┃ ┗ core.module.ts
┣ features/
┃ ┣ cart/ -- lazy loaded
┃ ┃ ┣ cart-routing.module.ts
┃ ┃ ┣ cart.component.html
┃ ┃ ┣ cart.component.ts
┃ ┃ ┗ cart.module.ts
┃ ┣ catalog/ -- lazy loaded
┃ ┃ ┣ catalog-routing.module.ts
┃ ┃ ┣ catalog.component.html
┃ ┃ ┣ catalog.component.ts
┃ ┃ ┗ catalog.module.ts
┃ ┗ login/ -- lazy loaded
┃   ┣ login-routing.module.ts
┃   ┣ login.component.html
┃   ┣ login.component.ts
┃   ┗ login.module.ts
┣ shared/
┃ ┣ components/
┃ ┃ ┣ card/
┃ ┃ ┃ ┣ card.component.html
┃ ┃ ┃ ┗ card.component.ts
┃ ┃ ┣ cart-single-product/
┃ ┃ ┃ ┣ cart-single-product.component.html
┃ ┃ ┃ ┗ cart-single-product.component.ts
┃ ┃ ┣ catalog-bar/
┃ ┃ ┃ ┣ catalog-bar.component.html
┃ ┃ ┃ ┗ catalog-bar.component.ts
┃ ┃ ┣ header/
┃ ┃ ┃ ┣ header.component.html
┃ ┃ ┃ ┗ header.component.ts
┃ ┃ ┗ snackbar/
┃ ┃   ┣ snackbar.component.html
┃ ┃   ┗ snackbar.component.ts
┃ ┣ models/
┃ ┃ ┣ notification.ts
┃ ┃ ┣ product.ts
┃ ┃ ┣ types.ts
┃ ┃ ┗ user.ts
┃ ┣ services/
┃ ┃ ┣ authentication.service.ts
┃ ┃ ┣ cart.service.ts
┃ ┃ ┣ catalog.service.ts
┃ ┃ ┗ notification.service.ts
┃ ┗ shared.module.ts
┣ app-routing.module.ts
┣ app.component.html
┣ app.component.ts
┗ app.module.ts

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
