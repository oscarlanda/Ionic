import { Route, Routes } from '@angular/router';

export const ROUTES: Route [] = [

  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },

  {
    path: 'tabs', 
    //loadChildren: () => import('./tabs/routes').then(mod => mod.MENUPRINCIPAL_ROUTES)
    loadComponent: () => import('./tabs/tabs.page').then((m) => m.TabsPage),
    children: [
      {
        path: 'inicio',
        loadComponent: () => import('./inicio/inicio.page').then((m) => m.InicioPage),
      },
      {
        path: 'catalogos',
        loadComponent: () =>
          import('./catalogos/catalogos.page').then((m) => m.CatalogosPage),
      },
      {
        path: '**',
        redirectTo: 'inicio',
      },
    ],
  },

];
