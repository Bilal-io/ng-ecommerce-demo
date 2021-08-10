import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogGuard } from './core/auth/catalog.guard';
import { LoginGuard } from './core/auth/login.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./features/login/login.module').then((m) => m.LoginModule),
    canActivate: [LoginGuard]
  },
  {
    path: 'catalog',
    loadChildren: () => import('./features/catalog/catalog.module').then((m) => m.CatalogModule),
    canActivate: [CatalogGuard]
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule),
    canActivate: [CatalogGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
