import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-empresas',
  templateUrl: './empresas.component.html',
  styleUrls: ['./empresas.component.css']
})
export class EmpresasComponent implements OnInit {

  @Output() onVerComidas = new EventEmitter();

  //rv = Region Visible

  rv:any="";
  constructor() { }

  ngOnInit(): void {
  }

  verComidas(){
    this.rv="comidas";
    this.onVerComidas.emit(this.rv);
  }

}
