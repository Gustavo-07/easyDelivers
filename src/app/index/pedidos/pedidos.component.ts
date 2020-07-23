import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { Pedidos } from 'src/models/pedidos/pedidos';
import { PedidoService } from 'src/services/pedido.service';
import { RegistrarPedidoComponent } from 'src/app/index/registrar-pedido/registrar-pedido.component';
import { stateOrders } from 'src/types/types';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  displayedColumns: string[] = ['No', 'Estado', 'Solicitante', 'Mensajero', 'Origen', 'Destino', 'Ver'];
  dataSource = new MatTableDataSource();
  pedidoVer: Pedidos = new Pedidos();
  listaDePedidos: Pedidos[] = [];
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;


  constructor(
    private pedidoService: PedidoService,
    public dialog: MatDialog,
    private ngZone: NgZone
  ) { }

  async ngOnInit() {
    await Promise.all([
      (await this.pedidoService.obtenerPedidos()).subscribe(
        Response => {
          this.listaDePedidos = Response;
          this.dataSource = new MatTableDataSource(Response);
          this.dataSource.paginator = this.paginator;
          this.onVerPedido(Response[0].id);
        }
      )
    ]);
  }

  onVerTodosLosPedidos() {
    this.onCambiarDataSource(this.listaDePedidos);
  }

  onVerPedido(id: string) {
    this.ngZone.run(() => {
      this.pedidoVer = this.listaDePedidos.find(item => item.id.localeCompare(id) === 0);
    });
  }

  onCambiarDataSource(pedidos: Pedidos[]) {
    this.dataSource.disconnect();
    this.dataSource = new MatTableDataSource(pedidos);
    this.dataSource.paginator = this.paginator;
    this.dataSource._updatePaginator(this.dataSource.data.length);
  }

  openDialog(): void {
    const dialogRef = this.dialog.open( RegistrarPedidoComponent, {
      width: '700px'
    });
  }

  onEstadoSeleccionado(event: stateOrders) {
    event === 'all' ? this.onCambiarDataSource(this.listaDePedidos) :
    this.onCambiarDataSource(this.listaDePedidos.filter(item => item.estado === event));
  }

}
