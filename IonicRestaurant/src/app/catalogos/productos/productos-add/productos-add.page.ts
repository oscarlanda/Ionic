import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput
  ,IonSelect,IonSelectOption, IonPopover, IonTextarea, IonToggle, IonGrid, IonRow, IonCol, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { ImagenUpPage } from 'src/app/componentes-externos/imagenUp/imagenup.page';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { LocalFile } from 'src/app/componentes-externos/imagenUp/localfile.interface';
import { Router, RouterModule } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBack } from 'ionicons/icons';
import { CatalogosService } from 'src/app/core/catalogos.service';
import { Producto } from 'src/app/models/productos.model';
import { ProductosService } from 'src/app/core/productos.service';
import { ToastController } from '@ionic/angular';
import { CategoriaProducto } from 'src/app/models/categoriaProducto.model';

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
  Va_caracteristicas: any;
  OCategoriaSelected: CategoriaProducto = new CategoriaProducto();

  constructor(private router: Router,
              private catalogosService: CatalogosService,
              private productosService: ProductosService,
              private toastCtrl: ToastController
  ) {     
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

    this.catalogosService.MCategoriasGet().subscribe({    
        next: (response) => {
          console.log(response);
           this.Va_caracteristicas = response.data;
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => console.info('complete')     
      });

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
    console.log(this.OfileLoad.data);
  }

  
  async EGuardar_Clic(){
    let request: Producto;
    let Ofile: LocalFile;
    let Vs_fileName: string = '';
    console.log(this.FproductoAdd);

    if(!this.FproductoAdd.valid) return;

    Ofile = this.FproductoAdd.get('Vcfoto')?.value;
    Vs_fileName = Ofile.name+'.'+Ofile.format;
    
    request = {
      'idProducto': 0,
      'nombre': this.FproductoAdd.get('Vcnombre')?.value,
      'descripcion': this.FproductoAdd.get('Vcdescripcion')?.value,
      'categoria': this.OCategoriaSelected.idCategoriaProducto,     
      'imgbase64': Ofile.data,  
      'imgName': Vs_fileName,
      'fregistro': '',
      'fedicion': '',
      'estatus':  this.Vbestatus ? 1 : 0, 
      'finicial': '',
      'ffinal': ''
    }

    this.productosService.MProductosSave(request).subscribe({    
      next: (response) => {
        console.log(response);
        
        if(response.estatus != 0)
        {
          this.MshowToast(response.mensaje);
          return;
        }

        this.router.navigate(['../','inicio','catalogos','productos']);

      },
      error: (err) => {
        console.log(err);
      },
      complete: () => console.info('complete')     
    });
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

  async MshowToast(mensaje: string) {
    await this.toastCtrl.create({
      message: mensaje,
      duration: 2000,
      position: "bottom" /*,
      buttons: [{
        text: 'OK',
        handler: () => {
          console.log("ok clicked");
        }
      }]*/
    }).then(res => res.present());
}

  MCategoriaSelect(e: any){    
    this.OCategoriaSelected =  e.target.value ; 
    console.log(e.target.value);  
    console.log(this.OCategoriaSelected);
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
