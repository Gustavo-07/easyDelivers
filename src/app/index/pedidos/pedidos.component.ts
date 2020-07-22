import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Entrega } from 'src/models/pedidos/entrega';
import { Pedido } from 'src/models/pedidos/pedido';
import { Recepcion } from 'src/models/pedidos/recepcion';
import { Solicitante } from 'src/models/pedidos/solicitante';
import { PedidoService } from 'src/services/pedido.service';
import { RegistrarPedidoComponent } from 'src/app/index/registrar-pedido/registrar-pedido.component';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  displayedColumns: string[] = ['No', 'Nombre', 'Codigo', 'Precio', 'Ver'];
  dataSource = new MatTableDataSource();
  public entrega = new Entrega();
  public pedido = new Pedido();
  public recepcion = new Recepcion();
  public solicitante = new Solicitante();
  listaDePedidos: Pedido[] = [];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  constructor(
    private pedidoService: PedidoService,
    public dialog: MatDialog
  ) { }

  async ngOnInit() {
    await Promise.all([
      (await this.pedidoService.obtenerPedidos()).subscribe(
        Response => {
          this.listaDePedidos = Response;
          this.dataSource = new MatTableDataSource(Response);
          this.dataSource.paginator = this.paginator;
          this.onVerPedido();
        }
      )
    ]);
  }

  onVerTodosLosPedidos() {
    this.onCambiarDataSource(this.listaDePedidos);
  }

  onVerPedido() {
  }

  onCambiarDataSource(pedidos: Pedido[]) {
    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource(pedidos);
    this.dataSource.paginator = this.paginator;
    this.dataSource._updatePaginator(this.dataSource.data.length);
  }

}
