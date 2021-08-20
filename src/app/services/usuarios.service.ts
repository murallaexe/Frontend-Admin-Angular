import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getUsuarios():Observable<any>{
    return this.httpClient.get('http://localhost:8888/usuarios');
  }

  setUsuarioMotorista(idUsuario:any):Observable<any>{
    return this.httpClient.post(
      `http://localhost:8888/usuarios/${idUsuario}/admin/motorista`,
      {
        placaVehiculo:""
      }
      );
  }

}
