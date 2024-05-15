import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
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
    , IonHeader, IonTitle, IonToolbar, CommonModule, IonSelect,IonSelectOption, IonPopover, IonTextarea, IonToggle,ImagenUpPage
     ,RouterModule, ReactiveFormsModule]
})
export class ProductosAddPage implements OnInit, OnDestroy {
  FproductoAdd: FormGroup;
  Vsimagedir: string = '';
  OfileLoad: LocalFile;

  constructor() { 
     defineCustomElements(window);
     this.Vsimagedir = 'assets/tmpImagenes';
  }

  ngOnInit() {
    console.log('onInit'); 

    this.FproductoAdd = new FormGroup({   

     /* Vcclave: new FormControl(null, {
        updateOn: 'blur',
        //validators: [Validators.required]
      }),*/

      Vcnombre: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(60)]
      }),

      Vcdescripcion: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.maxLength(500)]
      }),

      Vccategoria: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),

      Vcfoto: new FormControl(null, {updateOn: 'blur'}),

      Vcestatus: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required]
      }),

    });
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

  /*Example reset method for ion-select
  reset() {
    console.log("type of value: ", typeof(this.Form.get('FollowUpType').value))
    console.log(JSON.stringify(this.Form.value))
  }
  */


}
