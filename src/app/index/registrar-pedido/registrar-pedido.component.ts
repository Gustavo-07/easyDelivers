import { Component, OnInit } from '@angular/core';
import { Pedidos } from 'src/models/pedidos/pedidos';
import { MensajeroService } from 'src/services/mensajero.service';
import { PedidoService } from 'src/services/pedido.service';
import { Observable } from 'rxjs';
import { Mensajero } from 'src/models/mensajeros/mensajero';
import { MatDialogRef, MAT_DIALOG_DATA, MatSnackBar } from '@angular/material';
import { PushNotification } from 'src/app/index/funcionesGenerales.board';

@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrls: ['./registrar-pedido.component.css']
})
export class RegistrarPedidoComponent implements OnInit {

  public pedido = new Pedidos();

  // public mensajeros$: Observable<Mensajero[]>;
  public mensajero = new Mensajero();

  constructor(
    private mensajeroService: MensajeroService,
    private pedidoService: PedidoService,
    public dialogRef: MatDialogRef<RegistrarPedidoComponent>,
    public snakBar: MatSnackBar
    ) { }

  ngOnInit() {
    // this.mensajeros$ = this.mensajeroService.ObtenerMensajeros();
  }

  async onSubmit() {
    try {
      await this.pedidoService.guardarPedido(this.pedido);
      PushNotification('Se guardo el pedido', this.snakBar);
    } catch (e) {
      PushNotification('Error al guardar el pedido', this.snakBar);
      console.log('esto', e);
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
