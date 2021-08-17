import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { EmpresasComponent } from './components/empresas/empresas.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FooternavComponent } from './components/footernav/footernav.component';
import { ComidasComponent } from './components/comidas/comidas.component';
import { ProductosComponent } from './components/productos/productos.component';
import { MotoristasComponent } from './components/motoristas/motoristas.component';
import { OrdenesComponent } from './components/ordenes/ordenes.component';
import { DetalleOrdenComponent } from './components/detalle-orden/detalle-orden.component';
import { DetalleMotoristaComponent } from './components/detalle-motorista/detalle-motorista.component';
import { OrdenTomadaComponent } from './components/orden-tomada/orden-tomada.component';
import { OrdenEntregadaComponent } from './components/orden-entregada/orden-entregada.component';
import { OrdenDisponibleComponent } from './components/orden-disponible/orden-disponible.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpresasComponent,
    DashboardComponent,
    FooternavComponent,
    ComidasComponent,
    ProductosComponent,
    MotoristasComponent,
    OrdenesComponent,
    DetalleOrdenComponent,
    DetalleMotoristaComponent,
    OrdenTomadaComponent,
    OrdenEntregadaComponent,
    OrdenDisponibleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
