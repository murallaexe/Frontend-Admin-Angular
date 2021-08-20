import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  @Output() onverOrdenesTomadas = new EventEmitter();
  @Output() onverOrdenesEntregadas = new EventEmitter();
  @Output() onverOrdenesDisponibles = new EventEmitter();
  @Output() onverOrdenesCamino = new EventEmitter();

  ordenes:any=[];
  ordenesTomadas:any=[];
  ordenesOrigen:any=[];
  ordenesCamino:any=[];
  ordenesDestino:any=[];



  faPlus = faPlus;
  constructor(
    private ordenesServices: OrdenesService
  ) { }

  ngOnInit(): void {
    this.getOrdenes();
  }

  getOrdenes(){
    this.ordenesServices.getOrdenes()
    .subscribe(
      result => {
        this.ordenes = result;

        this.ordenes.forEach((orden:any) => {
          switch (orden.estadoOrden) {
            case "tomada":
              this.ordenesTomadas.push(orden);
              break;
            case "en camino":
              this.ordenesCamino.push(orden)
              break;
            case "origen":
              this.ordenesOrigen.push(orden);
              break;
            case "destino":
              this.ordenesDestino.push(orden);
              break;
            default:
              break;
          }
        });
      }
    )
  }


  verOrdenesTomadas(){
    this.onverOrdenesTomadas.emit('ordenesTomadas');    
  }
  verOrdenesCamino(){
    this.onverOrdenesCamino.emit('ordenesCamino');
  }
  verOrdenesEntregadas(){
    this.onverOrdenesEntregadas.emit('ordenesEntregadas');
  }

  verOrdenesOrigen(){
    this.onverOrdenesDisponibles.emit('ordenesDisponibles');
  }
  
}
