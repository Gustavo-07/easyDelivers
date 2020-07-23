import { Component, OnInit } from '@angular/core';
import { MensajeroService } from 'src/services/mensajero.service';
import { Mensajero } from 'src/models/mensajeros/mensajero';
import { Vehiculo } from 'src/models/mensajeros/vehiculo';

@Component({
  selector: 'app-registrar-mensajero',
  templateUrl: './registrar-mensajero.component.html',
  styleUrls: ['./registrar-mensajero.component.css']
})
export class RegistrarMensajeroComponent implements OnInit {

  public mensajero = new Mensajero();
  public vehiculo = new Vehiculo();
  private image: any;

  imagenUrl = '/assets/add2.png';
  imagenSubida: File;

  TipoVehiculo = ['Motorizado', 'Automovil', 'Bicicleta']
  TipoGenero = ['Masculino', 'Femenino', 'Otro']
  constructor(private mensajeroService: MensajeroService) { }

  ngOnInit() {
  }

  async onSubmit() {
    this.mensajero.banned = false;
    this.mensajero.disponible = true;

    this.mensajeroService.uploadImage(this.mensajero, this.vehiculo, this.image);
  }

  handleImage(event: any): void {
    this.image = event.target.files[0];
  }

  entradaDeArchivo(file: FileList) {
    if (file.length > 0) {
      this.imagenSubida = file.item(0);

      // vista de imagen previa
      const reader = new FileReader();
      reader.onload = (event: any) => {
        this.imagenUrl = event.target.result;
      };
      reader.readAsDataURL(this.imagenSubida);
    }
  }

}