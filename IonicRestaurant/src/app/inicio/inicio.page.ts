import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonFooter, 
         IonButtons, IonTabs, IonTabBar, IonTabButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons'; // Import this
import { add} from 'ionicons/icons';

const Iconos = {
  add
}

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
  standalone: true,
  imports: [IonButtons, IonFooter, IonContent, IonHeader, IonTitle, IonToolbar, 
            IonTabs, IonTabBar, IonTabButton, IonIcon, CommonModule, FormsModule]
})
export class InicioPage implements OnInit {

  constructor() { 
    addIcons({add});
  }

  ngOnInit() {    
  }

}
