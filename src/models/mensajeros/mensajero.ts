import { generoOptions } from 'src/types/types'

export class Mensajero {
  banned: boolean;
  cedula: number;
  nombre: string;
  correo: string;
  telefono: number;
  direccion: string;
  disponible: boolean;
  fechaNcimiento?: string;
  genero: generoOptions;
  realizados: string[];
  realizando: string;
  image?: any;

}
