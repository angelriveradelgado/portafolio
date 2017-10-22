import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ProductosService {

  productos: any[] = [];
  productosFiltrado: any[] = [];
  cargando = false;

  constructor( private http: Http) {
    this.cargarProductos();
  }

  public cargarProductos() {
    this.cargando = true;

    const promesa = new Promise( (resolve, reject) => {
      this.http.get('https://portafolio-1059e.firebaseio.com/productoIdx.json')
        .subscribe( res => {
          // console.log( res.json() );

          setTimeout( () => {
            this.cargando = false;
            this.productos = res.json();
            resolve();
          }, 1500);

        });
      } );
      return promesa;

    }

  public buscarProducto( termino: String ) {
    if ( this.productos.length === 0 ) {
      this.cargarProductos().then( () => {
        // termina la carga
        this.filtrarProductos( termino );
      });

    } else {
      this.filtrarProductos( termino );
    }

  }

  private filtrarProductos( termino: String) {

    this.productosFiltrado = [];
    termino = termino.toLowerCase();

    this.productos.forEach( prod => {
      if ( prod.categoria.indexOf( termino ) >= 0 || prod.titulo.toLowerCase().indexOf( termino ) >= 0 ) {
        this.productosFiltrado.push( prod );
        // console.log( prod );
      }
    });
  }

  public cargarProducto( cod: String) {
    return this.http.get('https://portafolio-1059e.firebaseio.com/producto/' + cod + '.json');
    // return this.http.get(`https://portafolio-1059e.firebaseio.com/producto/${ cod }.json`);
  }

}
