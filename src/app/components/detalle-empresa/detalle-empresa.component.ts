import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-empresa',
  templateUrl: './detalle-empresa.component.html',
  styleUrls: ['./detalle-empresa.component.css']
})
export class DetalleEmpresaComponent implements OnInit {

  detalleEmpresa:any = [];

  constructor() { }

  ngOnInit(): void {
  }

  renderizarDetalleEmpresa(infoEmpresa:any){
    console.log('info empresa:', infoEmpresa);
    this.detalleEmpresa = infoEmpresa;
  }

}
