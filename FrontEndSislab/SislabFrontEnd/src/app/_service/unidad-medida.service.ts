import { UnidadMedida } from './../_model/unidadMedida';
import { HOST3, TOKEN_NAME } from './../_shared/var.constant';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { $ } from 'protractor';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnidadMedidaService {

  unidadMedidaCambio = new Subject<UnidadMedida[]>();
  url = `${HOST3}/unidadMedida`;

  constructor( private http: HttpClient) { }

  listarUnidadMedida() {
    console.log('empieza metodo');
    console.log(sessionStorage.getItem(TOKEN_NAME));
    // tslint:disable-next-line:prefer-const
    let access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
    console.log('el token es:');
    console.log(access_token);
    console.log(this.url);
    return this.http.get<UnidadMedida[]>(this.url);
  }

/*  // tslint:disable-next-line:variable-name
  listarCargosPersonalPorId(id_cargo: string) {
    return this.http.get<CargosPersonal>(`${this.url}/${id_cargo}`);
  }
*/
  registrarUnidadMedida(umedida: UnidadMedida) {
    return this.http.post( this.url, umedida);
  }

  modificarUnidadMedida(umedida: UnidadMedida) {
    return this.http.put( this.url, umedida);
  }

  // tslint:disable-next-line:variable-name
  eliminarUnidadMedida(id_umedida: string) {
    return this.http.delete<UnidadMedida>(`${this.url}/${id_umedida}`);
  }
}
