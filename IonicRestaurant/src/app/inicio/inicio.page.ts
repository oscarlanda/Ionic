import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, 
         IonButtons, IonTabs, IonTabBar, IonTabButton, IonIcon, IonSegmentButton, IonSegment, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { home, book, fish, reader, restaurant, logOut, cube } from 'ionicons/icons';
import { CatalogosPage } from '../catalogos/catalogos.page';
import { CajasPage } from '../cajas/cajas.page';
import { CocinaPage } from '../cocina/cocina.page';
import { RestaurantPage } from '../restaurant/restaurant.page';
import { ReportesPage } from '../reportes/reportes.page';

const iconos =  {
  home,
  book,
  fish,
  restaurant,
  reader,
  logOut,
  cube
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonLabel, IonSegment, IonSegmentButton, IonButtons, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, 
            IonTabs, IonTabBar, IonTabButton, IonIcon, CommonModule, FormsModule, CatalogosPage, CajasPage,CocinaPage,
            RestaurantPage, ReportesPage]
})
export class InicioPage implements OnInit {
  tabSelect = "inicio";

  constructor() { 
    addIcons(iconos);
  }

  ngOnInit() {    
  }

  /*mMenuSeleccion(tab: string){
    this.tabSelect = tab;
    console.log(this.tabSelect);
  }*/

}
