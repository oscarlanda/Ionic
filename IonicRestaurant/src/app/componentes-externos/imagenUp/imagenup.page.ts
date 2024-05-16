import { Component, Input, OnInit, PlatformRef } from '@angular/core';
import { CommonModule, PlatformLocation } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonCard, IonCardContent, IonLabel, IonList, IonItem, IonButtons, IonButton, IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { images } from 'ionicons/icons';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Platform } from '@ionic/angular'
import { Directory, Encoding, Filesystem } from '@capacitor/filesystem';
import { LocalFile } from './localfile.interface';
import { Output, EventEmitter } from '@angular/core';



const Ciconos =  {
 images
}

@Component({
  selector: 'app-imagenup',
  templateUrl: './imagenup.page.html',
  styleUrls: ['./imagenup.page.scss'],
  standalone: true,
  imports: [IonIcon, IonButton, IonButtons, IonItem, IonList, IonLabel,  CommonModule, FormsModule, IonContent,IonCard, IonCardContent    
  ]
})
export class ImagenUpPage implements OnInit {
  @Input() OfileLoad: LocalFile;
  @Output() OUlocalFile = new EventEmitter<LocalFile>();
  

  constructor(private plt: Platform) { 
    addIcons(Ciconos);
    this.OfileLoad = {
      name: '',   
      format: '',
      data: ''
    };
  }

  ngOnInit() {    
  }

  async MUpImagen(){
    const Cimg = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Uri,
      source: CameraSource.Photos
    });

    console.log("img:", Cimg);
    
    if(Cimg){
      this.MLoadImage(Cimg);
    }
  }

  async MLoadImage(PPhoto: Photo){    
    const CBase64Data = await this.MLeerBase64(PPhoto);
    const CfileName = String(new Date().getTime());  
    this.OfileLoad = {
      name: CfileName,    
      format: PPhoto.format,
      data: CBase64Data
    }

    this.OUlocalFile.emit(this.OfileLoad);    
    /*const CfileName = new Date().getTime()+'.jpeg';   
    console.log(`${this.INImagedir}/${CfileName}`);
    const CsaveFile = await Filesystem.writeFile({
      path: `${this.INImagedir}/${CfileName}`,
      data: CBase64Data,
      directory: Directory.Data
    });*/
  }

  private async MLeerBase64(PPhoto: Photo){

    if(this.plt.is('hybrid')){
      const Cfile = await Filesystem.readFile({
        path: String(PPhoto.path),
        encoding: Encoding.UTF8
       });

      return String(Cfile.data);
    }
    else
    {
      const Cresponse = await fetch(PPhoto.webPath as string);
      const Cblob = await Cresponse.blob();
      return await this.MParseBlobToBase64(Cblob) as string;
    }
   
  }

  MParseBlobToBase64 = (Pblob: Blob) => new Promise((Presolve,Preject) =>{
    const Cread = new FileReader();
    Cread.onerror = Preject;
    Cread.onload = () => {
      Presolve(Cread.result);
    }

    Cread.readAsDataURL(Pblob);
  });

  private MblobToBase64(blob: Blob) {
    return new Promise((resolve, _ ) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }

}
