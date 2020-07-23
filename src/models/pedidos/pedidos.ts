import * as firebase from 'firebase/app';
import { Mensajero } from '../mensajeros/mensajero';

export class Pedidos {

  id: string;
  encargado: string;
  infoEncargado?: Mensajero;
  publicado: Date;
  entrega: Direccion;
  entregado?: Ubicacion;
  escogido?: Ubicacion;
  estado: string;
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
  ubicacion: string;
}

export interface Solicitante {
  cedula?: number;
  nombre: string;
  telefono: number;
}


