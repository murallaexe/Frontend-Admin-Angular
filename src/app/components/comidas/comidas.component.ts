import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-comidas',
  templateUrl: './comidas.component.html',
  styleUrls: ['./comidas.component.css']
})
export class ComidasComponent implements OnInit {
  @Output() onVerProductos = new EventEmitter();
  //rv: region Visible
  rv:any="";
  constructor() { }

  ngOnInit(): void {
  }

  verProductos(){
    this.rv = "productos";
    this.onVerProductos.emit(this.rv);
  }
}
