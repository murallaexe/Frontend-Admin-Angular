import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-detalle-motorista',
  templateUrl: './detalle-motorista.component.html',
  styleUrls: ['./detalle-motorista.component.css']
})
export class DetalleMotoristaComponent implements OnInit {

  detalleMotorista:any = [];
  idMotoristaSeleccionado:any = "";
  aux : any = [];
  constructor(
    private usuariosServices: UsuariosService
  ) { }

  ngOnInit(): void {
  } 

  renderizarDetalleMotorista(infoMotorista:any){
    this.idMotoristaSeleccionado = infoMotorista._id;
    console.log(this.idMotoristaSeleccionado)
    this.usuariosServices.getUsuarios()
    .subscribe(
      result => {
        this.aux = result;
        this.aux.forEach((usuario:any) => {
          if (usuario._id == this.idMotoristaSeleccionado) {
            console.log('motorista seleccionado:',usuario)
            this.detalleMotorista = usuario;
          }
        });
      }
    )
  }

  aprobarMotorista(idusuario:any){
    this.usuariosServices.setUsuarioMotorista(idusuario)
    .subscribe(
      result => {
        console.log('usuario aprobado: ', result)
        this.renderizarDetalleMotorista({_id:idusuario});
      },
      error => {
        console.log(error);
      }
    )
  }

}
