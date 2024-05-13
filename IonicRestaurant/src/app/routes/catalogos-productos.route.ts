import { Route, Routes } from '@angular/router';



// In admin/routes.ts:
export const MENUCATALOGOSPRODUCTOS_ROUTES: Route [] = [  
      {
            path: '',          
            loadComponent: () => import('../catalogos/productos/productos.page').then(mod => mod.ProductosPage),
            children:[
                  {
                        path:'',
                        loadComponent: () => import('../catalogos/productos/productos-list/productosList.page').then(mod => mod.ProductosListPage),
                  },                  
                  {
                        path:'productosList/detalle/:idProducto',
                        loadComponent: () => import('../catalogos/productos/productos-detalle/productos-detalle.page').then(mod => mod.ProductosDetallePage),
                  },
                  {
                        path:'add',
                        loadComponent: () => import('../catalogos/productos/productos-add/productos-add.page').then(mod => mod.ProductosAddPage),
                  },    
            ]          
      }                                                             
];
  