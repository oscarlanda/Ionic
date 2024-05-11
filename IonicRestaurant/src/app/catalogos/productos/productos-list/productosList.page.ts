import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar, IonImg, IonFooter } from '@ionic/angular/standalone';
import { ProductosService } from '../productos.service';
import { Producto } from '../productos.model';
import { RouterModule } from '@angular/router';
import { ProductosDetallePage } from '../productos-detalle/productos-detalle.page';
import { ProductosItemComponent } from '../productos-item/productos-item.component';


@Component({
  selector: 'app-productos-list',
  templateUrl: './productosList.page.html',
  styleUrls: ['./productosList.page.scss'],
  standalone: true,
  imports: [IonFooter, IonImg, IonAvatar, IonLabel, IonItem, IonList, IonContent, IonHeader, 
            IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule, ProductosItemComponent]
})
export class ProductosListPage implements OnInit, OnDestroy {
  lstProductos: Producto[] = []; 
   
  constructor(private productosService: ProductosService) { }

  ngOnInit() {
    console.log('OnInit');    
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.lstProductos = this.productosService.mAllProductos(); 
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');  
  }

}
