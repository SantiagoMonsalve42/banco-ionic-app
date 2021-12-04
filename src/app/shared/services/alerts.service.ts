import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(public alertController: AlertController) { }

  async ErrorAlert(error: string, mensaje:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: error,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
  async WarningAlert(error: string, mensaje:string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Atención',
      subHeader: error,
      message: mensaje,
      buttons: ['OK']
    });

    await alert.present();
  }
}
