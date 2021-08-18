import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  @Output() onVerDetalleEmpresa = new EventEmitter();
  //rv: region Visible
  rv:any="";
  comercios:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  verDetalleEmpresa(dataComercioElegido:any){
    this.rv = "detalleEmpresa";
    let d ={
      region:this.rv,
      detalleComercio:dataComercioElegido
    }
    this.onVerDetalleEmpresa.emit(d);
  }

  llenarArrayComercios(dataComercios:any){
    this.comercios = dataComercios;
    console.log('comercios a renderizar:', this.comercios);
  }

}
