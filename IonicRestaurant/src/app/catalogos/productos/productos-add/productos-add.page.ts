import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput
  ,IonSelect,IonSelectOption, IonPopover, IonTextarea, IonToggle, IonGrid, IonRow, IonCol, IonButtons, IonButton } from '@ionic/angular/standalone';
import { ImagenUpPage } from 'src/app/componentes-externos/imagenUp/imagenup.page';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { LocalFile } from 'src/app/componentes-externos/imagenUp/localfile.interface';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-productos-add',
  templateUrl: './productos-add.page.html',
  styleUrls: ['./productos-add.page.scss'],
  standalone: true,
  imports: [IonButton, IonButtons, IonGrid,IonRow, IonCol, IonToggle, IonTextarea, IonInput, IonLabel, IonItem, IonList, IonContent
    , IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule ,IonSelect,IonSelectOption, IonPopover, IonTextarea, IonToggle,ImagenUpPage
     ,RouterModule]
})
export class ProductosAddPage implements OnInit, OnDestroy {
  Vsimagedir: string = '';
  OfileLoad: LocalFile;

  constructor() { 
     defineCustomElements(window);
     this.Vsimagedir = 'assets/tmpImagenes';
  }

  ngOnInit() {
    console.log('onInit'); 
  }

  MloadImagen(e: any){
    this.OfileLoad = e;
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


}
