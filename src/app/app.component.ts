import { Component, ViewChild } from '@angular/core';
import { DetalleEmpresaComponent } from './components/detalle-empresa/detalle-empresa.component';
import { EmpresasComponent } from './components/empresas/empresas.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-Admin-Angular';

  @ViewChild('empresas') empresasComponent!: EmpresasComponent; 
  @ViewChild('detalleEmpresa') detalleEmpresaComponent!: DetalleEmpresaComponent; 

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
  }

  verDetalleEmpresa(e:any){
    console.log("ver detalle Empresa",e);
    this.rv = e.region;
    this.detalleEmpresaComponent.renderizarDetalleEmpresa(e.detalleComercio);
  }

  verMotoristas(e:any){
    this.rv = e;
  }  
  verOrdenes(e:any){this.rv = e;}
  verDetalleOrden(e:any){this.rv = e;}
  verDetalleMotorista(e:any){this.rv = e;}
  verDashboard(e:any){this.rv = e;}
  verOrdenesTomadas(e:any){this.rv = e;}
  verOrdenesEntregadas(e:any){this.rv = e;}
  verOrdenesDisponibles(e:any){this.rv = e;}
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
      default:
        break;
    }
  ;}


}
