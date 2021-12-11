import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getOrdenes():Observable<any>{
    return this.httpClient.get(`vejadelivery.herokuapp.com/ordenes`);
  }

  //primera que se ejecuta
  cambiosEnOrdenes(idOrden:any,informacion:any):Observable<any>{
    return this.httpClient.put(`vejadelivery.herokuapp.com/ordenes/${idOrden}`,{
      estadoOrden:informacion.estadoOrden,
      nombreMotorista:informacion.nombreMotorista,
      Idmotorista:informacion.Idmotorista,
      placaVehiculo:informacion.placaVehiculo,
    });
  }

}
