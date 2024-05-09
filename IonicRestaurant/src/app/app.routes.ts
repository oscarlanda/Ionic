import { Route, Routes, LoadChildren } from '@angular/router';

export const ROUTES: Route [] = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },

  {
    path: 'inicio',     
    loadComponent: () => import('./inicio/inicio.page').then((m) => m.InicioPage),     
  },
  {
    path: 'catalogos', 
    loadChildren: () => import('./catalogos/routes').then(mod => mod.MENUCATALOGOS_ROUTES), 
  },
  {
    path: 'cajas', 
    loadChildren: () => import('./cajas/cajas.page').then(mod => mod.CajasPage), 
  },
  {
    path: 'cocina', 
    loadChildren: () => import('./cocina/cocina.page').then(mod => mod.CocinaPage), 
  },
  {
    path: 'restaurant', 
    loadChildren: () => import('./restaurant/restaurant.page').then(mod => mod.RestaurantPage), 
  },
  {
    path: 'reportes', 
    loadChildren: () => import('./reportes/reportes.page').then(mod => mod.ReportesPage), 
  }

];
