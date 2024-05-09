import { Injectable } from '@angular/core';
import { Producto } from './productos.model';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {
  lstProductos: Producto[] = [
    {
      idProducto: 1,
      nombre: 'Enchiladas Rojas',
      descripcion: 'Tortilla de Maiz con Mole Rojo, rellenas de carne de cerdo',
      categoria: 1,
      pathImagen: './assets/enchiladasRojas.jpg',
      fregistro: '2021-08-01',
      fedicion: '2021-08-01',
      estatus: 0,
      fInicial: '',
      fFinal: ''
    },
    {
      idProducto: 2,
      nombre: 'Pozole',
      descripcion: 'Maiz Pozolero, carne de Cerdo, acompañado de chicharron, tostadas, aguacate y queso',
      categoria: 1,
      pathImagen: './assets/pozoleBlanco.jpeg',
      fregistro: '2021-08-01',
      fedicion: '2021-08-01',
      estatus: 0,
      fInicial: '',
      fFinal: ''
    }
  ];
  
  constructor() { }

  mAllProductos(){
     return [...this.lstProductos];
  }

  mBuscarProductos(idProducto: any){
    return {...this.lstProductos.find( (p) => { return p.idProducto == idProducto;})};
  }

  mEliminaProductos(idProducto: any){
    console.log('En el servicio');
    this.lstProductos = this.lstProductos.filter( p => {
      return p.idProducto != idProducto;
    });
  }
}
