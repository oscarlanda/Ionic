import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar,IonFooter } from '@ionic/angular/standalone';

@Component({
  selector: 'app-catalogos',
  templateUrl: './catalogos.page.html',
  styleUrls: ['./catalogos.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader,IonFooter, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class CatalogosPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
