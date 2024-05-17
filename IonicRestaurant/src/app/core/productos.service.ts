import { Injectable } from '@angular/core';
import { Producto } from '../models/productos.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';



@Injectable({
  providedIn: 'root'
})
export class ProductosService {  
  private Vsdomain: string | undefined;
  private Vsendpoint: string = 'producto';
  private Vsurl: string = '';
  private Oheaders = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});
 
  lstProductos: Producto[] = [
    {
      idProducto: 1,
      nombre: 'Enchiladas Rojas',
      descripcion: 'Tortilla de Maiz con Mole Rojo, rellenas de carne de cerdo',
      categoria: 1,
      pathimagen: './assets/enchiladasRojas.jpg',
      fregistro: '2021-08-01',
      fedicion: '2021-08-01',
      estatus: 0,
      finicial: '',
      ffinal: ''
    },
    {
      idProducto: 2,
      nombre: 'Pozole',
      descripcion: 'Maiz Pozolero, carne de Cerdo, acompañado de chicharron, tostadas, aguacate y queso',
      categoria: 1,
      pathimagen: './assets/pozoleBlanco.jpeg',
      fregistro: '2021-08-01',
      fedicion: '2021-08-01',
      estatus: 0,
      finicial: '',
      ffinal: ''
    }
  ];
  
  constructor(private httpClient: HttpClient) { 
    this.Vsdomain = environment.domain
    this.Vsurl = `${this.Vsdomain}${this.Vsendpoint}`;
    
  }

  MProductosGet(request: Producto): Observable<ResponseModel> {
     let json: string;
     
     json = JSON.stringify(request);
     console.log(json);

     //return [...this.lstProductos];
     return this.httpClient.post<ResponseModel>(
                                 this.Vsurl,    
                                 json,                                                             
                                 {headers: this.Oheaders});
  }

  MProductosFind(idProducto: any){
    return {...this.lstProductos.find( (p) => { return p.idProducto == idProducto;})};
  }

  MProductosDelete(idProducto: any){
    console.log('En el servicio');
    this.lstProductos = this.lstProductos.filter( p => {
      return p.idProducto != idProducto;
    });
  }
}
