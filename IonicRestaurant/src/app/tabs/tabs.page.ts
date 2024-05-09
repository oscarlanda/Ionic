import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonTabs,
         IonTabBar, IonTabButton, IonIcon
 } from '@ionic/angular/standalone';
 import { addIcons } from 'ionicons';
 import { home, book, fish, reader, restaurant, logOut } from 'ionicons/icons';
import { InicioPage } from '../inicio/inicio.page';

 const iconos =  {
   home,
   book,
   fish,
   restaurant,
   reader,
   logOut
 }

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule
          , IonTabs, IonTabBar, IonTabButton,IonIcon
  ]
})
export class TabsPage implements OnInit {
  tabInicio = InicioPage;

  constructor() { 
    addIcons(iconos);
  }

  ngOnInit() {
  }

}
