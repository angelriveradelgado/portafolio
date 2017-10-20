import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: []
})
export class ItemComponent implements OnInit {

  constructor( private route: ActivatedRoute ) {
    route.params.subscribe( parametros => {
      console.log( parametros );
      console.log( parametros['id'] );
    });
  }

  ngOnInit() {
  }

}
