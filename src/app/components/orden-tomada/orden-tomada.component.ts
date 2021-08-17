import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-orden-tomada',
  templateUrl: './orden-tomada.component.html',
  styleUrls: ['./orden-tomada.component.css']
})
export class OrdenTomadaComponent implements OnInit {

  @Output() onVerDetalleOrden = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  verOrdenTomada(idOrden:any){
    
  }

  verDetalleOrden(Orden:any){
    console.log(Orden);
    this.onVerDetalleOrden.emit('detalleOrden');
  }

}
