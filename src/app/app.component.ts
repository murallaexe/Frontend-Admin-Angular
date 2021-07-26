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

  verEmpresas(e:any){this.rv = e;}

  verComidas(e:any){this.rv = e;}

  verProductos(e:any){this.rv = e;}

  verMotoristas(e:any){this.rv = e;}  

  verOrdenes(e:any){this.rv = e;}

}
