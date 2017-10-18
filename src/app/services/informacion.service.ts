import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class InformacionService {

  info: any = {};
  infoCargada = false;
  infoAboutCargada = false;
  equipo: any[] = [];

  constructor( public http: Http) {
    this.loadInfo();
    this.loadAbout();
  }

  public loadInfo() {
    this.http.get('assets/data/info.pagina.json').subscribe( data => {
      // console.log(data.json());
      this.infoCargada = true;
      this.info = data.json();
    });
  }
  public loadAbout() {
    this.http.get('https://portafolio-1059e.firebaseio.com/equipo.json').subscribe( data => {
      // console.log(data.json());
      this.infoAboutCargada = true;
      this.equipo = data.json();
    });
  }

}
