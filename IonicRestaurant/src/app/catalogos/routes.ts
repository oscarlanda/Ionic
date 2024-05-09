import { Route } from '@angular/router';
import { CatalogosPage } from './catalogos.page';


// In admin/routes.ts:
export const MENUCATALOGOS_ROUTES: Route[] = [
   
   { path: '', component: CatalogosPage},
   {
      path: 'catalogos',    
      loadComponent: () => import('./catalogos.page').then((m) => m.CatalogosPage),
      children: [  
         {
            path: 'catalogos',
            loadComponent: () =>
              import('./productos/productos.page').then((m) => m.ProductosPage),
          },
      ],
   },
  ];
  