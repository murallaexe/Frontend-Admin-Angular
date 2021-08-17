import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-orden-entregada',
  templateUrl: './orden-entregada.component.html',
  styleUrls: ['./orden-entregada.component.css']
})
export class OrdenEntregadaComponent implements OnInit {

  @Output() onVerDetalleOrden = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  verOrdenEntregada(idOrden:any){

  }

  verDetalleOrden(Orden:any){
    console.log(Orden);
    this.onVerDetalleOrden.emit('detalleOrden');
  }
}
