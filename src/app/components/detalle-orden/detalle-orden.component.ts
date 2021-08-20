import { Component, EventEmitter, NgModule, OnInit, Output } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdenesService } from 'src/app/services/ordenes.service';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-detalle-orden',
  templateUrl: './detalle-orden.component.html',
  styleUrls: ['./detalle-orden.component.css']
})
export class DetalleOrdenComponent implements OnInit {

  @Output() onVerOrdenes = new EventEmitter();

  detalleOrden :any = [];
  aux: any = []
  aux2:any=[];
  aux3:any=[];
  motoristas:any=[];
  motoristaSeleccionado:any=[];
  idOrdenCollectionUsuario:any="";

  constructor(
    private ordenesServices: OrdenesService,
    private modalServices: NgbModal,
    private usuariosServices: UsuariosService
  ) { }

  ngOnInit(): void {
    this.llenarSelectMotoristas();
  }

  verOrdenes(){
    this.onVerOrdenes.emit('ordenes');
  }

  setDetalleorden(orden:any){
    this.ordenesServices.getOrdenes()
    .subscribe(
      result => {
        this.aux = result;
        this.aux.forEach((ordenaux:any) => {
          if (ordenaux._id == orden._id) {
            console.log('detalle orden:',ordenaux);
            this.detalleOrden = ordenaux;
          }
        });
        this.getIdOrdenCollectionUsuario(this.detalleOrden.idOrden)
      }
    )
  }

  getIdOrdenCollectionUsuario(idOrden:any){
    this.usuariosServices.getUsuarios()
    .subscribe(
      result => {
        this.aux3 = result;
        this.aux3.forEach((usuario:any) => {
          if (this.detalleOrden.idCliente == usuario._id) {
            usuario.listaPedidos.forEach((pedido:any) => {
              console.log('pedido donde voy a traer el id:',pedido);
              this.idOrdenCollectionUsuario = pedido._id;
            });
          }
        });
      }
    )
  }

  verModalMotorista(modal:any){
    this.modalServices.open(
      modal,
      {
        centered: true
      }
    )
  }

  llenarSelectMotoristas(){
    this.usuariosServices.getUsuarios()
    .subscribe(
      result => {
        this.aux2 = result;
        this.aux2.forEach((usuario:any) => {
          if (usuario.tipoUsuario == 'motorista') {
            this.motoristas.push(usuario);
          }
        });
      }
    )
    console.log('select motoristas', this.motoristas);
  }

  cerraModal(){
    this.modalServices.dismissAll();
  }

  asignarMotorista(){
    console.log(this.motoristaSeleccionado);
    
    this.modalServices.dismissAll();

    ///data primera peticion http://localhost:8888/ordenes/:idOrden Method:PUT

    let d1={
      estadoOrden:"tomada",
      nombreMotorista:this.motoristaSeleccionado.nombreUsuario,
      Idmotorista:this.motoristaSeleccionado._id,
      placaVehiculo:this.motoristaSeleccionado.placaVehiculo,
    }
    this.ordenesServices.cambiosEnOrdenes(this.detalleOrden._id, d1)
    .subscribe(
      result => {
        console.log(result)
      },
      error => {
        console.log(error);
      }
    )

    //http://localhost:8888/usuarios/:idUsuario/motorista/ordenes
  ///de ahi guardar en coleccion usuarios.ordenes
    ///informacion que se envia para crear el pedido en el campo de motoristas
    /// tambien el id del usuario motorista
    let d2 = {
      idCliente:this.detalleOrden.idCliente,
      idDatabaseOrden:this.detalleOrden._id,
      idOrden:this.detalleOrden.idOrden,
      empresa:this.detalleOrden.empresa,
      producto:this.detalleOrden.idCliente.producto,
      estadoOrden:this.detalleOrden.estadoOrden,
      descripcionPedido:this.detalleOrden.descripcionPedido,
      cantidadProducto:this.detalleOrden.cantidadProducto,
      tiempoEntrega:this.detalleOrden.tiempoEntrega,
      precioProducto:this.detalleOrden.precioProducto,
      comision:this.detalleOrden.comision,
      nombreCliente:this.detalleOrden.nombreCliente,
      telefonCliente:this.detalleOrden.telefonCliente,
      direccioncliente:this.detalleOrden.direccioncliente,
      metodoPago:this.detalleOrden.metodoPago
    }

    this.usuariosServices.guardarOrdenesMotorista(this.motoristaSeleccionado._id, d2)
    .subscribe(
      result => {
        console.log(result)
      },
      error => {
        console.log(error);
      }
    )

    ///http://localhost:8888/usuarios/:idUsuario/CambiosEstadoOrdenes/:idOrden
    ///idOrden usuarios.listaPedidos._id
    let d3={
      estadoOrden:"tomada",
      precio:this.detalleOrden.precioProducto
    }

    this.usuariosServices.cambiarEstadoCliente(this.detalleOrden.idCliente,this.idOrdenCollectionUsuario,d3)
    .subscribe(
      result => {
        console.log(result);
        location.reload();
      },
      error => {
        console.log(error)
      }
    )
    console.log('insertar a :'+this.motoristaSeleccionado);
  }
}
