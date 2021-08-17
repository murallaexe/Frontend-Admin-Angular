import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-orden-disponible',
  templateUrl: './orden-disponible.component.html',
  styleUrls: ['./orden-disponible.component.css']
})
export class OrdenDisponibleComponent implements OnInit {
  @Output() onVerDetalleOrden = new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  verOrdenDisponible(idOrden:any){
    
  }

  verDetalleOrden(Orden:any){
    console.log(Orden);
    this.onVerDetalleOrden.emit('detalleOrden');
  }
} 
