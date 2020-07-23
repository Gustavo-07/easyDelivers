import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { RegistrarMensajeroComponent } from '../registrar-mensajero/registrar-mensajero.component'
import { MensajeroService } from 'src/services/mensajero.service';
import { Mensajero } from 'src/models/mensajeros/mensajero';

@Component({
	selector: 'app-mensajero',
	templateUrl: './mensajero.component.html',
	styleUrls: ['./mensajero.component.css']
})

export class MensajeroComponent implements OnInit {
	displayedColumns: string[] = ['No', 'Nombre', 'Cedula', 'Telefono', 'Disponible', 'Ver'];
	dataSource = new MatTableDataSource();
	ListaMensajeros: Mensajero[] = [];
	DetalleMensajero: Mensajero;
	@ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

	constructor(private dialog: MatDialog,
		private mensajero: MensajeroService) { }

	async ngOnInit() {
		await Promise.all([
			(await this.mensajero.ObtenerMensajeros()).subscribe(
				Response => {
					this.ListaMensajeros = Response;
					this.dataSource = new MatTableDataSource(Response);
					this.dataSource.paginator = this.paginator;
					this.DetalleMensajero = this.ListaMensajeros[0];
				}
			)
		]);
	}

	onVerMensajero(correo: string) {
		this.ListaMensajeros.find(Mensajero => {
			Mensajero.correo === correo ? this.DetalleMensajero = Mensajero : [];
		})

	}

	openDialog() {
		const dialogRef = this.dialog.open(RegistrarMensajeroComponent);
		dialogRef.afterClosed().subscribe(result => {
			console.log(`Dialog result: ${result}`);
		});
	}


}