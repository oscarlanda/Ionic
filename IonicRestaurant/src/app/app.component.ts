import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet, IonSegmentButton, IonFooter, IonSegment, IonIcon, IonContent } from '@ionic/angular/standalone';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonContent, IonIcon, IonSegment, IonFooter, IonSegmentButton, IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
