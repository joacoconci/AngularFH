import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanLoad,
  Route,
  RouterStateSnapshot,
  UrlSegment,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ValidarTokenGuard implements CanActivate, CanLoad {
  constructor(private AuthService: AuthService, private router: Router) {}

  //Valida si el token existe, en caso de no existir redirecciona al login
  canActivate(): Observable<boolean> | boolean {
    return this.AuthService.validarToken().pipe(
      tap((valid) => {
        if (!valid) {
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }
  canLoad(): Observable<boolean> | boolean {
    return this.AuthService.validarToken().pipe(
      tap((valid) => {
        if (!valid) {
          this.router.navigateByUrl('/auth');
        }
      })
    );
  }
}
