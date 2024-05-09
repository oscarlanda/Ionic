import { Component, Input, OnInit } from '@angular/core';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonAvatar, IonImg } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { Producto } from '../productos.model';

@Component({
  selector: 'app-productos-item',
  templateUrl: './productos-item.component.html',
  styleUrls: ['./productos-item.component.scss'],
  standalone: true,
  imports: [IonImg, IonAvatar, IonLabel, IonItem, IonList, IonContent, IonHeader, 
    IonTitle, IonToolbar, CommonModule, FormsModule, RouterModule]
})
export class ProductosItemComponent  implements OnInit {
  @Input() productoItem: Producto;

  constructor() { }

  ngOnInit() {}

}
