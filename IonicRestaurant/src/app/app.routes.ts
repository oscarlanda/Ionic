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
    children:[
      {
        path: '', 
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home', 
        loadComponent: () => import('./home/home.page').then(mod => mod.HomePage), 
      },
      {
        path: 'catalogos', 
        loadChildren: () => import('./routes/catalogos.route').then(mod => mod.MENUCATALOGOS_ROUTES), 
      },
      {
        path: 'cajas', 
        loadComponent: () => import('./cajas/cajas.page').then(mod => mod.CajasPage), 
      },
      {
        path: 'cocina', 
        loadComponent: () => import('./cocina/cocina.page').then(mod => mod.CocinaPage), 
      },
      {
        path: 'restaurant', 
        loadComponent: () => import('./restaurant/restaurant.page').then(mod => mod.RestaurantPage), 
      },
      {
        path: 'reportes', 
        loadComponent: () => import('./reportes/reportes.page').then(mod => mod.ReportesPage), 
      }
    
    ]   
  },    
];
