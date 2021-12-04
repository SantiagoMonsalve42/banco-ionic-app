import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login, Registro } from '../components/interfaces/home.interfaces';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HomeServicesService {

  private url:string  = environment.baseUrl;

  constructor(private http: HttpClient) { }
  
  IniciarSesion(login: Login): Observable<any>{
    const loginUrl = this.url+"/session/login";
    return this.http.post<any>(loginUrl,login);
  }
  Registro(registro: Registro): Observable<any>{
    const registroUrl = this.url+"/session/registro";
    return this.http.post<any>(registroUrl,registro);
  }
}
