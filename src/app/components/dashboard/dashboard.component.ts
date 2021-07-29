import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  @Output() onVerEmpresas = new EventEmitter();
  @Output() onVerMotoristas = new EventEmitter();
  @Output() onVerOrdenes = new EventEmitter();
  
  //rv = region Visible
  rv:any = '';
  constructor() { }

  ngOnInit(): void {
  }

  verEmpresas(){
    this.rv = 'empresas';
    this.onVerEmpresas.emit(this.rv);
  }

  verMotorista(){
    this.rv = 'motoristas';
    this.onVerMotoristas.emit(this.rv);
  }

  verOrdenes(){
    this.rv = 'ordenes';
    this.onVerOrdenes.emit(this.rv);
  }

  verUSuariosAdmin(){
    console.log('ver usuarios admin');
  }
}
