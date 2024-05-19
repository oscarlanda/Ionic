import { Injectable } from '@angular/core';
import { Producto } from '../models/productos.model';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseModel } from '../models/response.model';



@Injectable({
  providedIn: 'root'
})
export class CatalogosService {  
    private Vsdomain: string | undefined;
    private Vsendpoint: string = 'catalogo';
    private Vsurl: string = '';
    private Oheaders = new HttpHeaders({'Content-Type': 'application/json; charset=UTF-8'});

    constructor(private httpClient: HttpClient) { 
        this.Vsdomain = environment.domain
        this.Vsurl = `${this.Vsdomain}${this.Vsendpoint}`;        
    }

    
  MCategoriasGet(): Observable<ResponseModel> {
    let json: string;

    this.Vsurl += "/categorias"
    //json = JSON.stringify(request);

    return this.httpClient.post<ResponseModel>(
                                this.Vsurl,    
                                null,//json,                                                             
                                {headers: this.Oheaders});
  }

}