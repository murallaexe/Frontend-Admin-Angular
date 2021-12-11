import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(
    private httpClient : HttpClient
  ) { }

  getCategorias():Observable<any>{
    return this.httpClient.get('vejadelivery.herokuapp.com/categorias/');
  }

  updateOneComercio(data:any):Observable<any>{
    return this.httpClient.put(`vejadelivery.herokuapp.com/categorias/${data.idCategoria}/comercios/${data.idComercio}`, data)
  }

  getOneComerce(data:any){
    return this.httpClient.get(`vejadelivery.herokuapp.com/categorias/${data.idCategoria}/comercios/${data.idComercio}`)
  }

}
