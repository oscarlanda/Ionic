import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonImg, IonGrid, IonRow, IonCol, IonButtons, IonBackButton, IonNav, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductosService } from '../productos.service';
import { Producto } from '../productos.model';
import { addIcons } from "ionicons"
import { trash } from 'ionicons/icons';
import { AlertController } from '@ionic/angular'

@Component({
  selector: 'app-productos-detalle',
  templateUrl: './productos-detalle.page.html',
  styleUrls: ['./productos-detalle.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonNav, IonBackButton, IonButtons, IonCol, IonRow, IonGrid, IonImg, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class ProductosDetallePage implements OnInit, OnDestroy {
  loadedProducto: Producto;

  constructor(private activatedRoute: ActivatedRoute,
              private productosService: ProductosService,
              private router: Router,
              private alertCtrl: AlertController)
  {
    addIcons({ trash });
  }

  ngOnInit() {
    console.log('ionViewWillEnter');
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

  
  ionViewWillEnter() {
    console.log('ionViewWillEnter');
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


  mEliminaProductos() {
    this.alertCtrl.create({
      header: "Confirmación",
      message: "¿Desea eliminar el producto?",
      buttons: [
        {text: "Cancelar", role: "cancel"},
        {text: "Eliminar", handler: () =>{
          this.productosService.mEliminaProductos(this.loadedProducto.idProducto);
          this.router.navigate(['/productos']); 
        }}
      ]
    }).then(alertEl => {
      alertEl.present();
    });     
  }


}
