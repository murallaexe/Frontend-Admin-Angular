import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-ordenes',
  templateUrl: './ordenes.component.html',
  styleUrls: ['./ordenes.component.css']
})
export class OrdenesComponent implements OnInit {

  @Output() onverOrdenesTomadas = new EventEmitter();
  @Output() onverOrdenesEntregadas = new EventEmitter();
  @Output() onverOrdenesDisponibles = new EventEmitter();

  faPlus = faPlus;
  constructor() { }

  ngOnInit(): void {
  }

  verOrdenesTomadas(){
      this.onverOrdenesTomadas.emit('ordenesTomadas');    
  }
  verOrdenesEntregadas(){
      this.onverOrdenesEntregadas.emit('ordenesEntregadas');
  }
  verOrdenesDisponibles(){
      this.onverOrdenesDisponibles.emit('ordenesDisponibles');
  }
  
}
