import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-orden-entregada',
  templateUrl: './orden-entregada.component.html',
  styleUrls: ['./orden-entregada.component.css']
})
export class OrdenEntregadaComponent implements OnInit {

  @Output() onVerDetalleOrden = new EventEmitter();

  ordenesEntregadas: any = [];
  aux:any = [];
  constructor(
    private ordenesServices: OrdenesService
  ) { }

  ngOnInit(): void {
    this.renderizarOrdenesDisponibles();
  }

  verOrdenEntregada(idOrden:any){

  }

  renderizarOrdenesDisponibles(){
    this.ordenesEntregadas = [];
    this.ordenesServices.getOrdenes()
    .subscribe(
      result => {
        this.aux = result;
        this.aux.forEach((orden:any) => {
          if (orden.estadoOrden == "destino") {
            this.ordenesEntregadas.push(orden);
          }
        });
        console.log("ordenes Entregadas:", this.ordenesEntregadas)
      }
    )
  }

  verDetalleOrden(orden:any){
    console.log(orden);
    let d = {
      region:'detalleOrden',
      infoOrden: orden
    }
    this.onVerDetalleOrden.emit(d);
  }
}
