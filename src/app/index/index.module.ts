import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index.component';
import { AngularMaterialModule } from '../angularMaterial.module';
import { MenuComponent } from './menu/menu.component';
import { RegistrarMensajeroComponent } from './registrar-mensajero/registrar-mensajero.component';
import { RegistrarPedidoComponent } from './registrar-pedido/registrar-pedido.component';
import { ReportesComponent } from './reportes/reportes.component'
import { indexRoutesModule } from './index.routes';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MensajeroComponent } from './mensajero/mensajero.component'
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    IndexComponent,
    MenuComponent,
    RegistrarMensajeroComponent,
    RegistrarPedidoComponent,
    ReportesComponent,
    PedidosComponent,
    MapComponent,
    MensajeroComponent
  ],
  imports: [
    indexRoutesModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    AngularMaterialModule
  ],
  exports: [],
  entryComponents: [MapComponent,
    RegistrarMensajeroComponent,
    RegistrarPedidoComponent,
    ReportesComponent],
  bootstrap: [IndexComponent]
})

export class IndexModule { }
