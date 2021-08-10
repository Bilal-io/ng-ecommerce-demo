import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { CardComponent } from './components/card/card.component';
import { HeaderComponent } from './components/header/header.component';
import { SnackbarComponent } from './components/snackbar/snackbar.component';
import { CatalogBarComponent } from './components/catalog-bar/catalog-bar.component';
import { CartSingleProductComponent } from './components/cart-single-product/cart-single-product.component';

@NgModule({
  declarations: [
    CardComponent,
    HeaderComponent,
    SnackbarComponent,
    CatalogBarComponent,
    CartSingleProductComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,

    AngularSvgIconModule

  ],
  exports: [
    CardComponent,
    HeaderComponent,
    SnackbarComponent,
    CatalogBarComponent,
    CartSingleProductComponent
  ]
})

export class SharedModule { }
