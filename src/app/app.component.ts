import { Component, ViewChild } from '@angular/core';
import { DetalleEmpresaComponent } from './components/detalle-empresa/detalle-empresa.component';
import { DetalleMotoristaComponent } from './components/detalle-motorista/detalle-motorista.component';
import { DetalleOrdenComponent } from './components/detalle-orden/detalle-orden.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { MotoristasComponent } from './components/motoristas/motoristas.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import {OrdenTomadaComponent} from './components/orden-tomada/orden-tomada.component'
import { OrdenDisponibleComponent } from './components/orden-disponible/orden-disponible.component';
import { OrdenEntregadaComponent } from './components/orden-entregada/orden-entregada.component';
import { OrdenCaminoComponent } from './components/orden-camino/orden-camino.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-Admin-Angular';

  @ViewChild('empresas') empresasComponent!: EmpresasComponent; 
  @ViewChild('detalleEmpresa') detalleEmpresaComponent!: DetalleEmpresaComponent; 
  @ViewChild('detalleMotorista') detalleMotoristaComponent!: DetalleMotoristaComponent; 
  @ViewChild('motoristas') motoristasComponent!: MotoristasComponent; 
  @ViewChild('detalleOrden') detalleOrdenComponent!: DetalleOrdenComponent; 
  @ViewChild('ordenes') ordenesComponent!: OrdenesComponent; 
  @ViewChild('ordenTomada') ordenTomadaComponent!: OrdenTomadaComponent; 
  @ViewChild('ordenDisponible') ordenDisponibleComponent!: OrdenDisponibleComponent; 
  @ViewChild('ordenEntregada') ordenEntregadaComponent!: OrdenEntregadaComponent; 
  @ViewChild('ordenCamino') OrdenCaminoComponent!: OrdenCaminoComponent; 

  //rv = region Visible
  rv:any="dashboard";

  atras:any= "dashboard";
  


  // bloque de funciones para moverse en las vistas
  verCategoriasEmpresas(e:any){
    this.rv = e;
  }

  verEmpresas(e:any){
    this.rv = e.region;
    this.empresasComponent.llenarArrayComercios(e.empresasComercios);
    this.detalleEmpresaComponent.categoriaElegida = e.categoriaCompleta._id;
  }

  verDetalleEmpresa(e:any){
    console.log("ver detalle Empresa",e);
    this.rv = e.region;
    this.detalleEmpresaComponent.renderizarDetalleEmpresa(e.detalleComercio);
  }

  verMotoristas(e:any){
    this.rv = e;
  }  

  verUsuarios(e:any){
    this.rv = e;
  }

  verOrdenes(e:any){this.rv = e;}
  verDetalleOrden(e:any){
    this.detalleOrdenComponent.setDetalleorden(e.infoOrden);
    this.rv = e.region;
  }
  verDetalleMotorista(e:any){
    this.rv = e.region;
    this.detalleMotoristaComponent.renderizarDetalleMotorista(e.motorista);
  }
  verDashboard(e:any){this.rv = e;}
  verOrdenesTomadas(e:any){this.rv = e;}
  verOrdenesEntregadas(e:any){this.rv = e;}
  verOrdenesDisponibles(e:any){
    this.rv = e;
  }
  verOrdenesCamino(e:any){
    this.rv = e;
  }
  verAtras(){
    switch (this.rv) {
      case 'dashboard':
        this.rv = 'dashboard'
        break;
      case 'categoriasEmpresas':
        this.rv ='dashboard'
        break;
      case 'empresas':
        this.rv ='categoriasEmpresas'
        break;
      case 'detalleEmpresa':
        this.rv ='empresas'
        break;
      case 'motoristas':
        this.rv ='dashboard'
        break;
      case 'detalleMotorista':
        this.rv ='motoristas'
        this.motoristasComponent.getMotoristas();
        break;  
      case 'ordenes':
        this.rv ='dashboard'
        break;
      case 'ordenesTomadas':
        this.rv ='ordenes'
        break;
      case 'ordenesEntregadas':
        this.rv ='ordenes'
        break;
      case 'ordenesDisponibles':
        this.rv ='ordenes'
        break;
      case 'usuarios':
        this.rv ='dashboard'
        break;
      case 'ordenesCamino':
        this.rv = 'ordenes'
        break;
      case 'detalleOrden':
        this.ordenTomadaComponent.renderizarOrdenesTomadas();
        this.ordenDisponibleComponent.renderizarOrdenesDisponibles();
        this.ordenEntregadaComponent.renderizarOrdenesDisponibles();
        this.OrdenCaminoComponent.renderizarOrdenesCamino();
        this.rv = 'ordenes';
        break;
      default:
        break;
    }
  ;}


}
