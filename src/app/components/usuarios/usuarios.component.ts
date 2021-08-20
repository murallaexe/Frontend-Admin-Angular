import { Component, OnInit } from '@angular/core';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios:any=[];
  motoristas: any = [];
  usuariosSinMotoristas:any=[];
  
  constructor(
    private usuariosServices: UsuariosService
  ) { }

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios(){
    this.usuariosServices.getUsuarios()
    .subscribe(
      result => {
        this.usuarios = result;
        this.usuarios.forEach((usuario:any) => {
          switch (usuario.tipoUsuario) {
            case 'administrador':
              this.usuariosSinMotoristas.push(usuario);
              break;
            case 'motorista':
              this.motoristas.push(usuario)
              break;
            case 'cliente':
              this.usuariosSinMotoristas.push(usuario);
              break;
            default:
              break;
          }
        });
        console.log('admin y clientes:',this.usuariosSinMotoristas);
        console.log('motoristas:',this.motoristas);
      },
      error => {
        console.log(error);
      }
    )
  }



}
