import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonInput
  ,IonSelect,IonSelectOption, IonPopover, IonTextarea, IonToggle } from '@ionic/angular/standalone';
import { ImagenUpPage } from 'src/app/componentes-externos/imagenUp/imagenup.page';
import { defineCustomElements } from '@ionic/pwa-elements/loader';
import { LocalFile } from 'src/app/componentes-externos/imagenUp/localfile.interface';

@Component({
  selector: 'app-productos-add',
  templateUrl: './productos-add.page.html',
  styleUrls: ['./productos-add.page.scss'],
  standalone: true,
  imports: [IonToggle, IonTextarea, IonInput, IonLabel, IonItem, IonList, IonContent, IonHeader, IonTitle, IonToolbar
    , CommonModule, FormsModule ,IonSelect,IonSelectOption, IonPopover, IonTextarea, IonToggle,ImagenUpPage]
})
export class ProductosAddPage implements OnInit {
  Vsimagedir: string = '';
  OfileLoad: LocalFile;

  constructor() { 
     defineCustomElements(window);
     this.Vsimagedir = 'assets/tmpImagenes';
  }

  ngOnInit() {
  }

  MloadImagen(e: any){
    this.OfileLoad = e;
  }

}
