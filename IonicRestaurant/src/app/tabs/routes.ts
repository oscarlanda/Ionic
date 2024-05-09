import { Route } from '@angular/router';
import { TabsPage } from './tabs.page';
import { InicioPage } from '../inicio/inicio.page';

// In admin/routes.ts:
export const MENUPRINCIPAL_ROUTES: Route[] = [
   
    { path: '', component: TabsPage},
    { path: 'inicio', component: InicioPage},
   // { path: ':idProducto', component: ProductosDetallePage},

  ];
  