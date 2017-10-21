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
        // console.log( res.json() );

        setTimeout( () => {
          this.cargando = false;
          this.productos = res.json();
        }, 1500);

      });
  }

  public cargarProducto( cod: String) {
    return this.http.get('https://portafolio-1059e.firebaseio.com/producto/' + cod + '.json');
    // return this.http.get(`https://portafolio-1059e.firebaseio.com/producto/${ cod }.json`);
  }

}
