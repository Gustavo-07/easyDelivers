export class Pedido {
  encargado: string;
  estado: string;

  horaEntregado?: Date;
  ubicacionEntregado?: string;

  horaEscogido?: Date;
  ubicacionEscogido?: string;

  horaRecibido?: Date;
  ubicacionRecibido?: string;
}
