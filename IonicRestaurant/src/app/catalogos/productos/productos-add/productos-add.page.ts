import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput
  ,IonSelect,IonSelectOption, IonPopover, IonTextarea, IonToggle, IonGrid, IonRow, IonCol, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ImagenUpPage } from 'src/app/componentes-externos/imagenUp/imagenup.page';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { LocalFile } from 'src/app/componentes-externos/imagenUp/localfile.interface';
import { RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';

const iconos =  {
  arrowBack
}


@Component({
  selector: 'app-productos-add',
  templateUrl: './productos-add.page.html',
  styleUrls: ['./productos-add.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonGrid,IonRow, IonCol, IonToggle, IonTextarea, IonInput, IonLabel, IonItem, IonList, IonContent
    , IonHeader, IonTitle, IonToolbar, CommonModule, IonSelect,IonSelectOption, IonPopover, IonTextarea, IonToggle,ImagenUpPage
     ,RouterModule, ReactiveFormsModule]
})
export class ProductosAddPage implements OnInit, OnDestroy {
  FproductoAdd: FormGroup;
  Vbestatus: boolean = false;
  OfileLoad: LocalFile;

  constructor() {     
     defineCustomElements(window);
     addIcons(iconos);
     this.OfileLoad = {
      name: '',   
      format: '',
      data: ''
    };
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
        validators: []
      }),

      Vccategoria: new FormControl(null, {
        updateOn: 'blur',
        validators: [Validators.required, Validators.min(1)]
      }),

      Vcfoto: new FormControl(null, {updateOn: 'blur'}),

      Vcestatus: new FormControl(false, {
        updateOn: 'blur',
        validators: []
      }),

    });
  }

  MloadImagen(e: any){
    this.OfileLoad = e;
    this.FproductoAdd.get('Vcfoto')?.patchValue(this.OfileLoad);
  }

  
  EGuardar_Clic(){
    console.log(this.FproductoAdd);
  }

  EEstatus_Change(e: any){
    this.Vbestatus = !this.Vbestatus;
    this.FproductoAdd.get('Vcestatus')?.patchValue(this.Vbestatus);
  }

  MForm_Reset(){
    this.FproductoAdd.reset();
    this.OfileLoad = {
      name: '',   
      format: '',
      data: ''
    };
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
