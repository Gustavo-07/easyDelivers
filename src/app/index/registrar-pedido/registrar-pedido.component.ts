import { Component, OnInit } from '@angular/core';
import { Entrega } from 'src/models/pedidos/entrega';
import { Pedido } from 'src/models/pedidos/pedido';
import { Recepcion } from 'src/models/pedidos/recepcion';
import { Solicitante } from 'src/models/pedidos/solicitante';
import { MensajeroService } from 'src/services/mensajero.service';
import { PedidoService } from 'src/services/pedido.service';
import { Observable } from 'rxjs';
import { Mensajero } from 'src/models/mensajeros/mensajero';

@Component({
  selector: 'app-registrar-pedido',
  templateUrl: './registrar-pedido.component.html',
  styleUrls: ['./registrar-pedido.component.css']
})
export class RegistrarPedidoComponent implements OnInit {

  public entrega = new Entrega();
  public pedido = new Pedido();
  public recepcion = new Recepcion();
  public solicitante = new Solicitante();

  // public mensajeros$: Observable<Mensajero[]>;
  public mensajero = new Mensajero();

  constructor(
    private mensajeroService: MensajeroService,
    private pedidoService: PedidoService
    ) { }

  ngOnInit() {
    // this.mensajeros$ = this.mensajeroService.ObtenerMensajeros();
  }

  async onSubmit() {
    this.pedidoService.guardarPedido(this.pedido, this.solicitante, this.recepcion, this.entrega);
  }

}
