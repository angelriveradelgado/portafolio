import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  producto: any = undefined;
  cod: any = undefined;

  constructor( private route: ActivatedRoute, private _ps: ProductosService ) {
    route.params.subscribe( parametros => {
      // console.log( parametros );
      // console.log( parametros['id'] );

      _ps.cargarProducto( parametros['id'] ).subscribe( res => {
        // console.log( res.json() );
        this.cod = parametros['id'];
        this.producto = res.json();
      });

    });
  }

  ngOnInit() {
  }

}
