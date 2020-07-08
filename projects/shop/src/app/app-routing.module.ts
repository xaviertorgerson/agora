import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';


const routes: Routes = [{
  path: 'menu',
  loadChildren: () => import('./features/menu/menu.module').then(m => m.MenuModule)
}, {
  path: 'checkout',
  loadChildren: () => import('./features/checkout/checkout.module').then(m => m.CheckoutModule)
}, {
  path: 'cart',
  loadChildren: () => import('./features/cart/cart.module').then(m => m.CartModule)
}, {
  path: 'status',
  loadChildren: () => import('./features/status/status.module').then(m => m.StatusModule)
}, {
  path: 'modifiers',
  loadChildren: () => import('./features/modifiers/modifiers.module').then(m => m.ModifiersModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
