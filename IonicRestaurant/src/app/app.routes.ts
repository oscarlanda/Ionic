import { Route, Routes } from '@angular/router';

export const ROUTES: Route [] = [

  {
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full',
  },

  {
    path: 'productos', 
    loadChildren: () => import('./catalogos/productos/routes').then(mod => mod.PRODUCTOS_ROUTES)
  },

];
