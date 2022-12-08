import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadosComponent } from './estados/estados.component';
import { CasetasComponent } from './casetas/casetas.component';
import { DatosComponent } from './datos/datos.component';
import { CilindrosComponent } from './cilindros/cilindros.component';
import { MantencionesComponent } from './mantenciones/mantenciones.component';
import { ValidacionesComponent } from './validaciones/validaciones.component';
import { StockComponent } from './stock/stock.component';
import { MainPageComponent } from './main-page/main-page.component';



@NgModule({
  declarations: [
    EstadosComponent,
    CasetasComponent,
    DatosComponent,
    CilindrosComponent,
    MantencionesComponent,
    ValidacionesComponent,
    StockComponent,
    MainPageComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AmbichartModule { }
