import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { OrdenesService } from 'src/app/services/ordenes.service';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

  @Output() onVerOrdenes = new EventEmitter();

  detalleOrden :any = [];
  aux: any = []


  constructor(
    private ordenesServices: OrdenesService
  ) { }

  ngOnInit(): void {
  }

  verOrdenes(){
    this.onVerOrdenes.emit('ordenes');
  }

  setDetalleorden(orden:any){
    this.ordenesServices.getOrdenes()
    .subscribe(
      result => {
        this.aux = result;
        this.aux.forEach((ordenaux:any) => {
          if (ordenaux._id == orden._id) {
            console.log(ordenaux);
            this.detalleOrden = ordenaux;
          }
        });
      }
    )
  }
}
