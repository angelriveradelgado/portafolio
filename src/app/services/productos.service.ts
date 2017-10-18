import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  cargando = false;

  constructor( private http: Http) {
    this.cargarProductos();
  }

  public cargarProductos() {
    this.cargando = true;
      this.http.get('https://portafolio-1059e.firebaseio.com/productoIdx.json')
      .subscribe( res => {
        console.log( res.json() );
        this.cargando = false;
      });
  }


}
