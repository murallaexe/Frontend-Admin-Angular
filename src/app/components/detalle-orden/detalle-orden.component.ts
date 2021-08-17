import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

  @Output() onVerOrdenes = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  verOrdenes(){
    this.onVerOrdenes.emit('ordenes');
  }

}
