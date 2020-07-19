import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { IndexComponent } from "./index.component";
import { MenuComponent } from './menu/menu.component';
import { InicioComponent } from './inicio/inicio.component';
import { RegistrarMensajeroComponent } from './registrar-mensajero/registrar-mensajero.component';
import { RegistrarPedidoComponent } from './registrar-pedido/registrar-pedido.component';
import { indexRoutesModule } from './index.routes';

@NgModule({
  declarations: [
    IndexComponent,
      MenuComponent,
      InicioComponent,
      RegistrarMensajeroComponent,
      RegistrarPedidoComponent
  ],
  imports: [
      indexRoutesModule,
      FormsModule,
      ReactiveFormsModule,
      CommonModule
  ],
  exports: [],
  entryComponents: [],
  bootstrap: [IndexComponent]
})

export class indexModule {}
