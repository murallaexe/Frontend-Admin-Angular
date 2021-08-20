import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-orden-camino',
  templateUrl: './orden-camino.component.html',
  styleUrls: ['./orden-camino.component.css']
})
export class OrdenCaminoComponent implements OnInit {

  @Output() onVerDetalleOrden = new EventEmitter();

  ordenesCamino:any=[];
  aux:any=[];

  constructor(
    private ordenesServices: OrdenesService
  ) { }

  ngOnInit(): void {
    this.renderizarOrdenesCamino();
  }

  renderizarOrdenesCamino(){
    this.ordenesCamino = [];
    this.ordenesServices.getOrdenes()
    .subscribe(
      result => {
        this.aux = result;
        this.aux.forEach((orden:any) => {
          if (orden.estadoOrden == "en camino") {
            this.ordenesCamino.push(orden);
          }
        });
        console.log("ordenes en Camino:", this.ordenesCamino)
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
