import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-orden-disponible',
  templateUrl: './orden-disponible.component.html',
  styleUrls: ['./orden-disponible.component.css']
})
export class OrdenDisponibleComponent implements OnInit {
  @Output() onVerDetalleOrden = new EventEmitter();

  ordenesDisponibles:any=[];
  aux:any=[];
  constructor(
    private ordenesServices: OrdenesService
  ) { }

  ngOnInit(): void {
    this.renderizarOrdenesDisponibles();
  }

  verOrdenDisponible(idOrden:any){
    
  }

  renderizarOrdenesDisponibles(){
    this.ordenesDisponibles = [];
    this.ordenesServices.getOrdenes()
    .subscribe(
      result => {
        this.aux = result;
        this.aux.forEach((orden:any) => {
          if (orden.estadoOrden == "origen") {
            this.ordenesDisponibles.push(orden);
          }
        });
        console.log("ordenes Disponibles:", this.ordenesDisponibles)
      }
    )
  }

  verDetalleOrden(orden:any){
    console.log(orden);
    let d = {
      region: 'detalleOrden',
      infoOrden: orden
    }
    this.onVerDetalleOrden.emit(d);
  }
} 
