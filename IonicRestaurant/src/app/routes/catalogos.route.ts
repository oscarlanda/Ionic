import { Route, Routes } from '@angular/router';



// In admin/routes.ts:
export const MENUCATALOGOS_ROUTES: Route [] = [  
      {
            path: '',          
            loadComponent: () => import('../catalogos/catalogos.page').then(mod => mod.CatalogosPage),
            children:[
                  {
                        path:'',
                        loadComponent: () => import('../catalogos/inicio/inicio.page').then(mod => mod.InicioPage),
                  },
                  {
                        path: 'productos', 
                        loadChildren: () => import('../routes/catalogos-productos.route').then(mod => mod.MENUCATALOGOSPRODUCTOS_ROUTES), 
                  }
            ]          
      }                                                             
];
  