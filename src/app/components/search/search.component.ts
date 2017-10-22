import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent {

  termino: String = undefined;
  constructor( private route: ActivatedRoute, private _ps: ProductosService ) {
    route.params.subscribe( parametros => {
      this.termino = parametros['termino'];
      console.log(this.termino);
      _ps.buscarProducto( this.termino );
    });
  }


}
