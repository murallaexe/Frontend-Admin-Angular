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
    return this.httpClient.get('http://localhost:8888/categorias/');
  }

  updateOneComercio(data:any):Observable<any>{
    return this.httpClient.put(`http://localhost:8888/categorias/${data.idCategoria}/comercios/${data.idComercio}`, data)
  }

  getOneComerce(data:any){
    return this.httpClient.get(`http://localhost:8888/categorias/${data.idCategoria}/comercios/${data.idComercio}`)
  }

}
