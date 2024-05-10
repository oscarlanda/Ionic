import { Route, Routes } from '@angular/router';



// In admin/routes.ts:
export const MENUCATALOGOS_ROUTES: Route [] = [  
      {
            path: '',          
            loadComponent: () => import('../catalogos/catalogos.page').then(mod => mod.CatalogosPage)          
      }                                                             
];
  