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

# Puzzle?
Markdown could not format ASCII correctly. I won't remove it.
Here is the structure in Markdown:
# app

* [core/](.\src\\app\core)
  * [auth/](.\src\\app\core\auth)
    * [auth.module.ts](.\src\\app\core\auth\auth.module.ts)
    * [catalog.guard.ts](.\src\\app\core\auth\catalog.guard.ts)
    * [login.guard.ts](.\src\\app\core\auth\login.guard.ts)
  * [interceptors/](.\src\\app\core\interceptors)
    * [fakeServer.interceptor.ts](.\src\\app\core\interceptors\fakeServer.interceptor.ts)
  * [core.module.ts](.\src\\app\core\core.module.ts)
* [features/](.\src\\app\features)
  * [cart/](.\src\\app\features\cart)
    * [cart-routing.module.ts](.\src\\app\features\cart\cart-routing.module.ts)
    * [cart.component.html](.\src\\app\features\cart\cart.component.html)
    * [cart.component.ts](.\src\\app\features\cart\cart.component.ts)
    * [cart.module.ts](.\src\\app\features\cart\cart.module.ts)
  * [catalog/](.\src\\app\features\catalog)
    * [catalog-routing.module.ts](.\src\\app\features\catalog\catalog-routing.module.ts)
    * [catalog.component.html](.\src\\app\features\catalog\catalog.component.html)
    * [catalog.component.ts](.\src\\app\features\catalog\catalog.component.ts)
    * [catalog.module.ts](.\src\\app\features\catalog\catalog.module.ts)
  * [login/](.\src\\app\features\login)
    * [login-routing.module.ts](.\src\\app\features\login\login-routing.module.ts)
    * [login.component.html](.\src\\app\features\login\login.component.html)
    * [login.component.ts](.\src\\app\features\login\login.component.ts)
    * [login.module.ts](.\src\\app\features\login\login.module.ts)
* [shared/](.\src\\app\shared)
  * [components/](.\src\\app\shared\components)
    * [card/](.\src\\app\shared\components\card)
      * [card.component.html](.\src\\app\shared\components\card\card.component.html)
      * [card.component.ts](.\src\\app\shared\components\card\card.component.ts)
    * [cart-single-product/](.\src\\app\shared\components\cart-single-product)
      * [cart-single-product.component.html](.\src\\app\shared\components\cart-single-product\cart-single-product.component.html)
      * [cart-single-product.component.ts](.\src\\app\shared\components\cart-single-product\cart-single-product.component.ts)
    * [catalog-bar/](.\src\\app\shared\components\catalog-bar)
      * [catalog-bar.component.html](.\src\\app\shared\components\catalog-bar\catalog-bar.component.html)
      * [catalog-bar.component.ts](.\src\\app\shared\components\catalog-bar\catalog-bar.component.ts)
    * [header/](.\src\\app\shared\components\header)
      * [header.component.html](.\src\\app\shared\components\header\header.component.html)
      * [header.component.ts](.\src\\app\shared\components\header\header.component.ts)
    * [snackbar/](.\src\\app\shared\components\snackbar)
      * [snackbar.component.html](.\src\\app\shared\components\snackbar\snackbar.component.html)
      * [snackbar.component.ts](.\src\\app\shared\components\snackbar\snackbar.component.ts)
  * [models/](.\src\\app\shared\models)
    * [notification.ts](.\src\\app\shared\models\notification.ts)
    * [product.ts](.\src\\app\shared\models\product.ts)
    * [types.ts](.\src\\app\shared\models\types.ts)
    * [user.ts](.\src\\app\shared\models\user.ts)
  * [services/](.\src\\app\shared\services)
    * [authentication.service.ts](.\src\\app\shared\services\authentication.service.ts)
    * [cart.service.ts](.\src\\app\shared\services\cart.service.ts)
    * [catalog.service.ts](.\src\\app\shared\services\catalog.service.ts)
    * [notification.service.ts](.\src\\app\shared\services\notification.service.ts)
  * [shared.module.ts](.\src\\app\shared\shared.module.ts)
* [app-routing.module.ts](.\src\\app\src\\app-routing.module.ts)
* [app.component.html](.\src\\app\src\\app.component.html)
* [app.component.ts](.\src\\app\src\\app.component.ts)
* [app.module.ts](.\src\\app\src\\app.module.ts)

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
