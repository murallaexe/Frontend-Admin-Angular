import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Frontend-Admin-Angular';

  //rv = region Visible
  rv:any="dashboard";



  // bloque de funciones para moverse en las vistas
  verEmpresas(e:any){this.rv = e;}
  verComidas(e:any){this.rv = e;}
  verProductos(e:any){this.rv = e;}
  verMotoristas(e:any){this.rv = e;}  
  verOrdenes(e:any){this.rv = e;}
  verDetalleOrden(e:any){this.rv = e;}
  verDetalleMotorista(e:any){this.rv = e;}
  verDashboard(e:any){this.rv = e;}
  verOrdenesTomadas(e:any){this.rv = e;}
  verOrdenesEntregadas(e:any){this.rv = e;}
  verOrdenesDisponibles(e:any){this.rv = e;}


}
