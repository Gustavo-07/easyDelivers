import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { Mensajero } from 'src/models/mensajeros/mensajero';
import { Vehiculo } from 'src/models/mensajeros/vehiculo';
import { AngularFireStorage } from '@angular/fire/storage';
import { AngularFireAuth } from '@angular/fire/auth';

const direccion = '/valledupar - CO/mensajeros/lista';

@Injectable({
  providedIn: 'root'
})

export class MensajeroService {
  private mensajeroCollection: AngularFirestoreCollection<Mensajero>;
  private filepath: any;
  private dowloadURL: Observable<string>;

  constructor(private afs: AngularFirestore,
              private storage: AngularFireStorage,
              private afAuth: AngularFireAuth
    ) {
    this.mensajeroCollection = afs.collection<Mensajero>(direccion);
  }

  private async guardarMensajero( mensajero: Mensajero, vehiculo: Vehiculo) {
    const postObj = this.mapPosObj(mensajero, vehiculo);
    await this.signUp(mensajero, (result: firebase.auth.UserCredential, error: any) => {
      result ? this.mensajeroCollection.doc(postObj.correo).set(postObj) : console.log(error);
     } );
  }

  public ObtenerMensajeros(): Observable<Mensajero[]> {
    return this.mensajeroCollection
    .snapshotChanges()
    .pipe(
      map(actions =>
        actions.map(a => {
          const data = <Mensajero>a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        })
      )
    );
  }

  public uploadImage( mensajero: Mensajero, vehiculo: Vehiculo, image: File) {
    this.filepath = `mensajeros/valledupar/${image.name}`;
    const fileRef = this.storage.ref(this.filepath);
    const task = this.storage.upload(this.filepath, image);
    task.snapshotChanges()
    .pipe(
      finalize(() => {
        fileRef.getDownloadURL().subscribe( urlImage => {
          this.dowloadURL = urlImage;
          this.guardarMensajero(mensajero, vehiculo);
        });
      })
    ).subscribe();
  }

  private mapPosObj(mensajero: Mensajero, vehiculo: Vehiculo) {
    const postObj = {
      banned: mensajero.banned,
      cedula: mensajero.cedula,
      correo: mensajero.correo,
      direccion: mensajero.direccion,
      disponible: mensajero.disponible,
      fechaNacimiento: mensajero.fechaNcimiento,
      genero: mensajero.genero,
      image: this.dowloadURL,
      nombre: mensajero.nombre,
      realizados: [],
      realizando: '',
      telefono: mensajero.telefono,
      vehiculo: {
        marca: vehiculo.marca,
        matricula: vehiculo.matricula,
        tipoVehiculo: vehiculo.tipoVehuiculo
      }

    };
    return postObj;
  }

  private async signUp(mensajero: Mensajero, callBack: Function) {
     this.afAuth.createUserWithEmailAndPassword(mensajero.correo, mensajero.cedula.toString())
    .then((result) => callBack(result))
    .catch((error) => callBack(error));
  }


}
