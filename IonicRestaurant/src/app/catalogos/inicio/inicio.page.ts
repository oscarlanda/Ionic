import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { 
  IonContent, 
  IonHeader, 
  IonTitle, 
  IonToolbar,
  IonFooter,  
  IonButtons,
  IonCard,
  IonCardTitle,
  IonCardSubtitle,  
  IonCardHeader,
  IonCardContent, 
  IonItem,
  IonList,
  IonLabel, 
  IonTabButton, 
  IonIcon,
  IonSegment,
  IonSegmentButton,
  IonThumbnail, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonRouterOutlet, 
    CommonModule, 
    FormsModule,
    IonSegmentButton, 
    IonIcon, 
    IonTabButton, 
    IonItem, 
    IonContent, 
    IonHeader,
    IonFooter, 
    IonTitle, 
    IonToolbar, 
    CommonModule, 
    FormsModule,   
    IonButtons, 
    IonCard,
    IonCardTitle,
    IonCardSubtitle,  
    IonCardHeader,
    IonCardContent,
    IonList,
    IonLabel,
    IonSegment,
    IonSegmentButton,
    IonThumbnail,
    RouterModule
  ]
})
export class InicioPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
