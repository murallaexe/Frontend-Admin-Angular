import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.css']
})
export class MotoristasComponent implements OnInit {
  @Output() onVerDetalleMotorista = new EventEmitter();

  faPlus =  faPlus;
  constructor() { }

  ngOnInit(): void {
  }

  verDetalleMotorista(){
    this.onVerDetalleMotorista.emit('detalleMotorista');
  }
}
