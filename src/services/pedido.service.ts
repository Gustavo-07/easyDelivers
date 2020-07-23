import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Mensajero } from 'src/models/mensajeros/mensajero';
import { Entrega } from 'src/models/pedidos/entrega';
import { Pedido } from 'src/models/pedidos/pedido';
import { Recepcion } from 'src/models/pedidos/recepcion';
import { Solicitante } from 'src/models/pedidos/solicitante';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';


const direccion = '/valledupar - CO/pedidos/lista';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedidoCollection: AngularFirestoreCollection<Pedido>;

  constructor(private afs: AngularFirestore) {
    this.pedidoCollection = afs.collection<Pedido>(direccion);
  }

  public async guardarPedido( pedido: Pedido, solicitante: Solicitante, recepcion: Recepcion, entrega: Entrega) {
    const postObj = this.mapPosObj(pedido, solicitante, recepcion, entrega);
    this.pedidoCollection.add(postObj);
  }

  public obtenerPedidos(): Observable<Pedido[]> {
    return this.pedidoCollection
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Pedido;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  private mapPosObj(pedido: Pedido, solicitante: Solicitante, recepcion: Recepcion, entrega: Entrega) {
    const postObj = {
      encargado: '',
      publicado: new Date(),
      entrega: {
        barrio: entrega.barrio,
        direccion: entrega.direccion,
        nombre: entrega.nombre,
        telefono: entrega.telefono
      },
      entregado: null,
      escogido: null,
      estado: 'new',
      recepcion: {
        barrio: recepcion.barrio,
        direccion: recepcion.direccion,
        nombre: recepcion.nombre,
        telefono: recepcion.telefono
      },
      recibido: null,
      solicitante: {
        cedula: solicitante.cedula,
        nombre: solicitante.nombre,
        telefono: solicitante.telefono
      }
    };
    return postObj;
  }
}
