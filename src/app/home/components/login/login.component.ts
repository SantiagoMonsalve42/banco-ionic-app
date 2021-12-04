import { Component, OnInit } from '@angular/core';
import { HomeServicesService } from '../../services/home-services.service';
import { Login } from '../interfaces/home.interfaces';
import { AlertsService } from '../../../shared/services/alerts.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  constructor(private homeService: HomeServicesService,
              private alertsService: AlertsService) { }

  ngOnInit() {}
  
  Login(){
    const persona: Login={
      email:"santi90@gmail.com",
      pass:"Pass123"
    }
    this.homeService.IniciarSesion(persona)
        .subscribe(
          (data: Response) =>{
            if(data.status === 200){
              console.log(data);
            }
          },
          (error) => {
            if(error.status == 400 || error.status != null){
              this.alertsService.ErrorAlert("Datos erróneos","Email o contraseña no son validos, verifique y vuelva a iniciar sesión");
            }
          }
        )
  }
}
