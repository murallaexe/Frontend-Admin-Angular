import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { CategoriasService } from 'src/app/services/categorias.service';

@Component({
  selector: 'app-detalle-empresa',
  templateUrl: './detalle-empresa.component.html',
  styleUrls: ['./detalle-empresa.component.css']
})
export class DetalleEmpresaComponent implements OnInit {

  detalleEmpresa:any = [];
  disponible:boolean = true;
  btnGuardarCambios:boolean = false;
  categoriaElegida: any ="";
  aux:any=[];

  constructor(
    private categoriasServices: CategoriasService
  ) { }

  ngOnInit(): void {
    this.formDetalleEmpresa.disable();
    this.formSucursales.disable();
     // habilita el formulario después de 4s 
    // setTimeout (() => this.formDetalleEmpresa.enable () , 4000);
  }

  formDetalleEmpresa = new FormGroup ({
    tipoEmpresa: new FormControl('', Validators.required),
    sedePais: new FormControl('', Validators.required),
    LemaEmpresa: new FormControl('', Validators.required),
    imagenLogo: new FormControl('', Validators.required),
    imagenComercio: new FormControl('', Validators.required),
    imagenPortada: new FormControl('', Validators.required),
    imagenBanner: new FormControl('', Validators.required)
  });

  formSucursales = new FormGroup({
    nombreSucursal: new FormControl('', Validators.required),
    direccion: new FormControl('', Validators.required)
  });

  renderizarDetalleEmpresa(infoEmpresa:any){
    console.log('info empresa:', infoEmpresa);
    ///
    let req = {
      idCategoria: this.categoriaElegida,
      idComercio: infoEmpresa._id
    }
    console.log('req',req)

    this.categoriasServices.getOneComerce(req)
    .subscribe(
      result => {
        this.aux = result;
        this.detalleEmpresa = this.aux.comercios[0];
      }
    )
  }

  habilitarFormulario(){
    this.formDetalleEmpresa.enable();
    this.formSucursales.enable();
    this.btnGuardarCambios = true;
  }

  guardarCambios(detalleEmpresa:any){
    this.formDetalleEmpresa.disable();
    this.btnGuardarCambios = false;

    let lema = "";
    if (this.formDetalleEmpresa.get('LemaEmpresa')?.value == "") {
      lema = this.detalleEmpresa.LemaEmpresa;
    }else {
      lema = this.formDetalleEmpresa.get('LemaEmpresa')?.value
      this.formDetalleEmpresa.get('LemaEmpresa')?.setValue(null);
    }

    let tipoEmpresa = "";
    if (this.formDetalleEmpresa.get('tipoEmpresa')?.value == "") {
      tipoEmpresa = this.detalleEmpresa.tipoEmpresa;
    }else {
      tipoEmpresa = this.formDetalleEmpresa.get('LemaEmpresa')?.value
    }

    let sedePais=""
    if (this.formDetalleEmpresa.get('sedePais')?.value == "") {
      sedePais = this.detalleEmpresa.sedePais;
    }else {
      sedePais = this.formDetalleEmpresa.get('sedePais')?.value
    }

    let imagenLogo=""
    if (this.formDetalleEmpresa.get('imagenLogo')?.value == "") {
      imagenLogo = this.detalleEmpresa.imagenLogo;
    }else {
      imagenLogo = this.formDetalleEmpresa.get('imagenLogo')?.value
    }

    let imagenComercio=""
    if (this.formDetalleEmpresa.get('imagenComercio')?.value == "") {
      imagenComercio = this.detalleEmpresa.imagenComercio;
    }else {
      imagenComercio = this.formDetalleEmpresa.get('imagenComercio')?.value
    }
    
    let imagenPortada=""
    if (this.formDetalleEmpresa.get('imagenPortada')?.value == "") {
      imagenPortada = this.detalleEmpresa.imagenPortada;
    }else {
      imagenPortada = this.formDetalleEmpresa.get('imagenPortada')?.value
    }


    let data = {
      idCategoria:this.categoriaElegida,
      idComercio:detalleEmpresa._id,
      tipoEmpresa : tipoEmpresa,
      sedePais : sedePais,
      LemaEmpresa : lema,
      imagenLogo : imagenLogo,
      imagenComercio : imagenComercio,
      imagenPortada : imagenPortada
    }
    this.categoriasServices.updateOneComercio(data)
    .subscribe(
      result => {
        console.log('datos actualizados')
        this.renderizarDetalleEmpresa({_id:detalleEmpresa._id});
      }
    )
  }
}
