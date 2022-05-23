import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import {
  agregarUsuario,
  AuthResponse,
  Usuario,
} from '../interfaces/interfaces';
import { catchError, map, tap } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl: string = environment.baseUrl;
  private _usuario!: Usuario;
  private _agregarUsuario!: agregarUsuario;

  get usuario() {
    return { ...this._usuario };
  }

  constructor(private http: HttpClient) {}
//Registro un nuevo usuario
  registro(name: string, email: string, password: string) {
    const url = `${this.baseUrl}/auth/new`;
    const body = { name, email, password };
    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        if (resp.ok == true) {
          this._agregarUsuario = {
            name: resp.name!,
            email: resp.name!,
            password: resp.password!,
          };
        }
      }),
      map(resp=>resp.ok),
      catchError(err=>of(err.error.msg))
    );
  }

  login(email: string, password: string) {
    const url = `${this.baseUrl}/auth`;
    const body = { email, password };
    return this.http.post<AuthResponse>(url, body).pipe(
      tap((resp) => {
        sessionStorage.setItem('token', resp.token!);
        if (resp.ok == true) {
          this._usuario = {
            name: resp.name!,
            uid: resp.uid!,
            email:resp.email!
          };
        }
      }),
      map((resp) => resp.ok),
      catchError((err) => of(err.error.msg))
    );
  }

  //Obtengo el token del sessionStorage
  validarToken(): Observable<boolean> {
    const url = `${this.baseUrl}/auth/renew`;
    const headers = new HttpHeaders().set(
      'x-token',
      sessionStorage.getItem('token') || ''
    );

    return this.http.get<AuthResponse>(url, { headers }).pipe(
      map((resp) => {
        sessionStorage.setItem('token', resp.token!);
        if (resp.ok == true) {
          this._usuario = {
            name:resp.name!,
            uid: resp.uid!,
            email:resp.email!
          };
        }
        return resp.ok;
      }),
      catchError((err) => of(false))
    );
  }
  //borro todo lo que hay en el session storage
  logout() {
    sessionStorage.clear();
  }
}
