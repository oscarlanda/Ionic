import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar, IonImg } from '@ionic/angular/standalone';
import { ProductosService } from './productos.service';
import { Producto } from './productos.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonImg, IonAvatar, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProductosPage implements OnInit {
  lstProductos: Producto[] = [];
   
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    this.lstProductos = this.productosService.mAllProductos(); 
  }

}
