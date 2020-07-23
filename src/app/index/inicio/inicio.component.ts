import { Component, OnInit } from '@angular/core';
import { Pedidos } from 'src/models/pedidos/pedidos';
import { PedidoService } from 'src/services/pedido.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public pedido = new Pedidos();

  public pedidos$: Observable<Pedidos[]>;

  constructor(
    private pedidoService: PedidoService
  ) { }

  ngOnInit() {
    this.pedidos$ = this.pedidoService.obtenerPedidos();
  }

}
