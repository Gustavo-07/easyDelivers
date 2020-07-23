import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index.component';
import { AngularMaterialModule } from '../angularMaterial.module';
import { MenuComponent } from './menu/menu.component';
import { RegistrarMensajeroComponent } from './registrar-mensajero/registrar-mensajero.component';
import { RegistrarPedidoComponent } from './registrar-pedido/registrar-pedido.component';
import { indexRoutesModule } from './index.routes';
import { PedidosComponent } from './pedidos/pedidos.component';
import { MapComponent } from './map/map.component';

@NgModule({
  declarations: [
    IndexComponent,
      MenuComponent,
      RegistrarMensajeroComponent,
      RegistrarPedidoComponent,
      PedidosComponent,
      MapComponent
  ],
  imports: [
      indexRoutesModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      AngularMaterialModule
  ],
  exports: [],
  entryComponents: [
    MapComponent
  ],
  bootstrap: [IndexComponent]
})

export class IndexModule {}
