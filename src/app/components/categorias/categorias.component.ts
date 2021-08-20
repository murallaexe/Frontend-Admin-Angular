import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css']
})
export class CategoriasComponent implements OnInit {

  @Output() onVerEmpresas = new EventEmitter();

  //rv = Region Visible

  rv:any="";
  categorias:any=[];


  constructor(
    private categoriasServices: CategoriasService
  ) { }

  ngOnInit(): void {
    this.generarCategorias();
  }

  verEmpresas(categoria:any){
    console.log('categoria elegida', categoria)
    this.rv="empresas";
    let d = {
      region: this.rv,
      empresasComercios: categoria.comercios,
      categoriaCompleta: categoria 
    }
    this.onVerEmpresas.emit(d);
  }

  generarCategorias(){
    this.categoriasServices.getCategorias()
    .subscribe(
      result => {
        this.categorias = result;
        console.log('categorias', this.categorias);  
      }
    )
  }


}
