import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';
import { MenuService } from './menu.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { TOKEN_NAME, HOSTG } from '../_shared/var.constant';
import { map } from 'rxjs/operators';
import { Menu } from '../_model/menu';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor(private http: HttpClient, private router: Router, private loginService: LoginService, private menuService: MenuService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const helper = new JwtHelperService();

    // tslint:disable-next-line:prefer-const
    let rpta = this.loginService.estaLogeado();
    console.log('Valor de respuesta');
    console.log(rpta);
    if (!rpta) {
      sessionStorage.clear();
      this.router.navigate(['login']);
      return false;
    } else {
      // tslint:disable-next-line:prefer-const
      let token = JSON.parse(sessionStorage.getItem(TOKEN_NAME));

      if (!helper.isTokenExpired(token.access_token)) {
        const decodedToken = helper.decodeToken(token.access_token);
        // console.log(decodedToken);
        // tslint:disable-next-line:prefer-const
        let url = state.url;
        // console.log('la url');
        // console.log(url);
        return this.menuService.listarPorUsuario(decodedToken.user_name).pipe(map((data: Menu[]) => {
          this.menuService.menuCambio.next(data);
          // console.log(data);
          let cont = 0;
          // tslint:disable-next-line:prefer-const
          for (let m of data) {
            if (m.url === url) {
              cont++;
              break;
            }
          }

          if (cont > 0) {
            return true;
          } else {
            this.router.navigate(['notFound']);
            return false;
          }
          // return true;
        }));
        // return true;
      } else {
      // tslint:disable-next-line:prefer-const
      /* let access_token = JSON.parse(sessionStorage.getItem(TOKEN_NAME)).access_token;
      console.log(access_token);
      this.http.get(`${HOSTG}usuarios/anular/${access_token}`).subscribe(() => {
      sessionStorage.clear();
      this.router.navigate(['login']);
      return false;
      }); */

      sessionStorage.clear();
      this.router.navigate(['login']);
      return false;
      }
    }
  }
}
