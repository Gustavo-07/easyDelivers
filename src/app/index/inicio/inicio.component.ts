import { Component, OnInit } from '@angular/core';
import { Entrega } from 'src/models/pedidos/entrega';
import { Pedido } from 'src/models/pedidos/pedido';
import { Recepcion } from 'src/models/pedidos/recepcion';
import { Solicitante } from 'src/models/pedidos/solicitante';
import { PedidoService } from 'src/services/pedido.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public entrega = new Entrega();
  public pedido = new Pedido();
  public recepcion = new Recepcion();
  public solicitante = new Solicitante();

  public pedidos$: Observable<Pedido[]>;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.pedidos$ = this.pedidoService.obtenerPedidos();
  }

}
