import { Component, OnDestroy, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonToolbar, IonTitle, IonList, IonContent,  IonFooter, IonRouterOutlet, IonButtons, IonButton, IonIcon
    , IonRouterLink
 } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { addCircle, exit } from 'ionicons/icons';
import { RouterModule } from '@angular/router';

const iconos =  {
    addCircle,
    exit
  }

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
  standalone: true,
  imports: [IonIcon, IonFooter,  IonContent, IonList, IonTitle, IonToolbar, CommonModule, FormsModule,IonRouterOutlet,
    IonButtons, IonButton,IonRouterLink, RouterModule
   ]
})
export class ProductosPage implements OnInit, OnDestroy {

   
  constructor() { 
    addIcons(iconos);
  }

  ngOnInit() {
    console.log('OnInit');    
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
