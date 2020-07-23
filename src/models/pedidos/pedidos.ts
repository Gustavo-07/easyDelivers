import { Mensajero } from '../mensajeros/mensajero';
import { stateOrders } from 'src/types/types';

export class Pedidos {

  id: string;
  encargado: string;
  infoEncargado?: Mensajero;
  publicado: Date;
  entrega: Direccion;
  entregado?: Ubicacion;
  escogido?: Ubicacion;
  estado: stateOrders;
  recepcion: Direccion;
  recibido?: Ubicacion;
  solicitante: Solicitante;

  constructor() {

    this.id = '';
    this.encargado = '';
    this.estado = 'new';
    this.solicitante = {
      nombre: '',
      telefono: null,
      cedula: null
    };

    this.recepcion = {
      direccion: '',
      barrio: '',
      nombre: '',
      telefono: null

    };

    this.entrega = {
      direccion: '',
      barrio: '',
      nombre: '',
      telefono: null

    };
  }
}

export interface Direccion {
  barrio?: string;
  direccion: string;
  nombre?: string;
  telefono?: number;
}

export interface Ubicacion {
  hora: Date;
  ubicacion: firebase.firestore.GeoPoint;
}

export interface Solicitante {
  cedula?: number;
  nombre: string;
  telefono: number;
}