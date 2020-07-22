import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './index.component';
import { AngularMaterialModule } from '../angularMaterial.module';
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarMensajeroComponent } from './registrar-mensajero/registrar-mensajero.component';
import { RegistrarPedidoComponent } from './registrar-pedido/registrar-pedido.component';
import { indexRoutesModule } from './index.routes';
import { PedidosComponent } from './pedidos/pedidos.component';

@NgModule({
  declarations: [
    IndexComponent,
      MenuComponent,
      InicioComponent,
      RegistrarMensajeroComponent,
      RegistrarPedidoComponent,
      PedidosComponent
  ],
  imports: [
      indexRoutesModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule,
      AngularMaterialModule
  ],
  exports: [],
  entryComponents: [],
  bootstrap: [IndexComponent]
})

export class IndexModule {}
