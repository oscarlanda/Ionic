import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonGrid, IonRow, IonCol } from '@ionic/angular/standalone';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../productos.service';
import { Producto } from '../productos.model';

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.page.html',
  styleUrls: ['./productos-detalle.page.scss'],
  standalone: true,
  imports: [IonCol, IonRow, IonGrid, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProductosDetallePage implements OnInit {
  loadedProducto: Producto;

  constructor(private activatedRoute: ActivatedRoute,
              private productosService: ProductosService) 
  {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(pMap => {
        if(!pMap.has('idProducto')) 
        {
          //redirect
          return;
        }

        const idProducto= pMap.get('idProducto');
        this.loadedProducto = this.productosService.mBuscarProductos(idProducto);
    });
  }

}
