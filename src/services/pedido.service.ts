import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Mensajero } from 'src/models/mensajeros/mensajero';
import { Pedidos } from 'src/models/pedidos/pedidos';

import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/firestore';

const direccion = '/valledupar - CO/pedidos/lista';
@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private pedidoCollection: AngularFirestoreCollection<Pedidos>;

  constructor(private afs: AngularFirestore) {
    this.pedidoCollection = afs.collection<Pedidos>(direccion);
  }

  public async guardarPedido( pedido: Pedidos): Promise<DocumentReference> {
   pedido.publicado = new Date();
   return this.pedidoCollection.add(JSON.parse(JSON.stringify(pedido)));
  }

  public obtenerPedidos(): Observable<Pedidos[]> {
    return this.pedidoCollection
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = a.payload.doc.data() as Pedidos;
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }
}