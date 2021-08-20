import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { UsuariosService } from 'src/app/services/usuarios.service';
@Component({
  selector: 'app-motoristas',
  templateUrl: './motoristas.component.html',
  styleUrls: ['./motoristas.component.css']
})
export class MotoristasComponent implements OnInit {
  @Output() onVerDetalleMotorista = new EventEmitter();

  faPlus =  faPlus;
  motoristas:any=[];
  usuarios: any = [];

  constructor(
    private usuariosServices: UsuariosService
  ) { }

  ngOnInit(): void {
    this.getMotoristas();
  }

  verDetalleMotorista(infomotorista:any){
    let data = {
      motorista: infomotorista,
      region: "detalleMotorista"
    }
    this.onVerDetalleMotorista.emit(data);
  }

  getMotoristas(){
    this.usuariosServices.getUsuarios()
    .subscribe(
      result => {
        this.usuarios = result;
        this.motoristas = [];
        this.usuarios.forEach((usuario:any) => {
          if (usuario.solicitud == true) {
            this.motoristas.push(usuario);
          }
        });
        console.log('final ciclo:', this.motoristas)
      },
      error => {
        console.log(error);
      }
    )
  }
}
